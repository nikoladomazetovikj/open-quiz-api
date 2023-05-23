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
    Route::get('/logout', [\App\Http\Controllers\Api\AuthController::class, 'logout']);
    Route::get('/questions/{categoryId}/{difficultyId}/{limit}', [\App\Http\Controllers\Api\QuestionController::class,
        'index']);
    Route::apiResources([
        'categories' => \App\Http\Controllers\Api\CategoryController::class,
        'difficulties' => \App\Http\Controllers\Api\DifficultyController::class,
        'questions' => \App\Http\Controllers\Api\QuestionController::class
    ]);
});

// list all categories
Route::get('allCategories', [\App\Http\Controllers\Api\CategoryController::class, 'index']);
Route::get('allDifficulties', [\App\Http\Controllers\Api\DifficultyController::class, 'index']);
Route::get('quizQuestions/{categoryId}/{difficultyId}/{limit}', [\App\Http\Controllers\Api\QuestionController::class,
    'clientQuestions']);
Route::post('addQuestion', [\App\Http\Controllers\Api\QuestionController::class, 'store']);
Route::post('/login', [\App\Http\Controllers\Api\AuthController::class, 'login']);

