<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cv;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CvController extends Controller
{
    public function index(Request $request)
    {
        return $request->user()->cvs()->latest()->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:pdf', 'max:5120'],
        ]);

        $path = $request->file('file')->store('cvs');

        $cv = $request->user()->cvs()->create([
            'original_name' => $request->file('file')->getClientOriginalName(),
            'path' => $path,
        ]);

        return response()->json($cv, 201);
    }

    public function show(Request $request, Cv $cv)
    {
        abort_if($cv->user_id !== $request->user()->id, 403);

        return $cv;
    }

    public function destroy(Request $request, Cv $cv)
    {
        abort_if($cv->user_id !== $request->user()->id, 403);

        Storage::delete($cv->path);
        $cv->delete();

        return response()->noContent();
    }
}