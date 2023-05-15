<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DifficultyRequest;
use App\Http\Resources\DifficultyResource;
use App\Models\Difficulty;
use Illuminate\Http\Request;

class DifficultyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $difficulties = Difficulty::all();

        return DifficultyResource::collection($difficulties);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DifficultyRequest $request)
    {
        $difficulty = Difficulty::create(['name' => $request->name]);

        return new DifficultyResource($difficulty);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(DifficultyRequest $request, Difficulty $difficulty)
    {
        $difficulty->update(['name' => $request->name]);

        return new DifficultyResource($difficulty);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Difficulty $difficulty)
    {
        $difficulty->delete();

        return response()->noContent();
    }
}
