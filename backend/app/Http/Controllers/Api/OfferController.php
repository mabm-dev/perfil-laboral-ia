<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
  
    public function index(Request $request)
    {
        return $request->user()->offers()->latest()->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'company' => ['nullable', 'string', 'max:255'],
            'description' => ['required', 'string'],
        ]);

        $offer = $request->user()->offers()->create($validated);

        return response()->json($offer, 201);
    }

    public function show(Request $request, Offer $offer)
    {
        abort_if($offer->user_id !== $request->user()->id, 403);
    
        return $offer;
    }

    public function update(Request $request, Offer $offer)
    {
         abort_if($offer->user_id !== $request->user()->id, 403);

         $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'company' => ['nullable', 'string', 'max:255'],
            'description' => ['required', 'string'],
        ]);

        $offer->uodate($validated);

        return  $offer;
    }

    public function destroy(Request $request, Offer $offer)
    {
        abort_if($offer->user_id !== $request->user()->id, 403);

        $offer->delete();

        return response()->noContent();
    }
}
