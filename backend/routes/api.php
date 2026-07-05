<?php
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::prefix('v1')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);  
    Route::middleware('auth:sanctum')->get('/me', 
        function (Request $request) {
            return $request->user(); 
        });   
});
