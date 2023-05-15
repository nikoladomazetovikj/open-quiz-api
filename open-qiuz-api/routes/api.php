<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResources([
        'categories' => \App\Http\Controllers\Api\CategoryController::class,
        'difficulties' => \App\Http\Controllers\Api\DifficultyController::class
    ]);
});

// list all categories
Route::get('allCategories', [\App\Http\Controllers\Api\CategoryController::class, 'index']);
Route::get('allDifficulties', [\App\Http\Controllers\Api\DifficultyController::class, 'index']);

