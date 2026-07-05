<?php
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\OfferController;
use App\Http\Controllers\Api\CvController;

Route::prefix('v1')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);  
    Route::middleware('auth:sanctum')->get('/me', 
        function (Request $request) {
            return $request->user(); 
        });   
    Route::middleware('auth:sanctum')->apiResource('offers', OfferController::class);
    Route::middleware('auth:sanctum')->apiResource('cvs', CvController::class)->except(['update']);    
});
