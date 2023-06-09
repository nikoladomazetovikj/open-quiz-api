<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApproveQuestionRequest;
use App\Http\Requests\CLientQuestionRequest;
use App\Http\Requests\DeleteQuestionRequest;
use App\Http\Requests\QuestionRequest;
use App\Http\Resources\ClientQuestionResource;
use App\Http\Resources\QuestionResource;
use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($categoryId, $difficultyId)
    {
        $query = Question::with('answers', 'difficulties', 'categories')
            ->where('is_approved', false);

        // filter response by categories
        if ($categoryId !== 'all') {
            $query->where('category_id', $categoryId);
        }

        // filter response by difficulty
        if ($difficultyId !== 'all') {
            $query->where('difficulty_id', $difficultyId);
        }

        $questions = $query->paginate(5);

        return QuestionResource::collection($questions);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(QuestionRequest $request)
    {
        $question = Question::create([
            'question' => $request->question,
            'category_id' => $request->category_id,
            'difficulty_id' => $request->difficulty_id,
            'is_approved' => true
        ]);

        $answer = Answer::create([
            'answer_1' => $request->answer_1,
            'answer_2' => $request->answer_2,
            'answer_3' => $request->answer_3,
            'answer_4' => $request->answer_4,
            'answer_1_is_true' => $request->answer_1_is_true,
            'answer_2_is_true' => $request->answer_2_is_true,
            'answer_3_is_true' => $request->answer_3_is_true,
            'answer_4_is_true' => $request->answer_4_is_true,
            'question_id' => $question->id
        ]);

        $res = Question::with('answers')->where('id', $question->id);

        return QuestionResource::collection($res->get());
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ApproveQuestionRequest $request, Question $question)
    {
        // only for admins
        $question->update(['is_approved' => true]);

        return new QuestionResource($question);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DeleteQuestionRequest $request, Question $question)
    {
        $question->delete();

        return response()->noContent();
    }

    public function clientQuestions($categoryId, $difficultyId, $limit)
    {
        // create response for the clients
        $query = Question::with('answers', 'difficulties', 'categories')
            ->where('is_approved', true);

        if ($categoryId !== 'all') {
            $query->where('category_id', $categoryId);
        }

        if ($difficultyId !== 'all') {
            $query->where('difficulty_id', $difficultyId);
        }

        $questions = $query->inRandomOrder()
            ->limit($limit)
            ->get();

        return ClientQuestionResource::collection($questions);
    }

    public function clientAddQuestion(ClientQuestionRequest $request)
    {
        $question = Question::create([
            'question' => $request->question,
            'category_id' => $request->category_id,
            'difficulty_id' => $request->difficulty_id,
        ]);

        $answer = Answer::create([
            'answer_1' => $request->answer_1,
            'answer_2' => $request->answer_2,
            'answer_3' => $request->answer_3,
            'answer_4' => $request->answer_4,
            'answer_1_is_true' => $request->answer_1_is_true,
            'answer_2_is_true' => $request->answer_2_is_true,
            'answer_3_is_true' => $request->answer_3_is_true,
            'answer_4_is_true' => $request->answer_4_is_true,
            'question_id' => $question->id
        ]);

        $res = Question::with('answers')->where('id', $question->id);

        return QuestionResource::collection($res->get());
    }
}
