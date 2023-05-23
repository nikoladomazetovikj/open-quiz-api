<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AnswerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $correctAnswer = $this->getCorrectAnswer();
        $incorrectAnswers = $this->getIncorrectAnswers();

        return [
            'id' => $this->id,
            'correct_answer' => $correctAnswer,
            'incorrect_answers' => $incorrectAnswers,
        ];
    }

    private function getCorrectAnswer()
    {
        $correctAnswer = '';
        for ($i = 1; $i <= 4; $i++) {
            $column = 'answer_' . $i;
            $isTrueColumn = 'answer_' . $i . '_is_true';
            if ($this->$isTrueColumn) {
                $correctAnswer = $this->$column;
                break;
            }
        }
        return $correctAnswer;
    }

    private function getIncorrectAnswers()
    {
        $incorrectAnswers = [];
        for ($i = 1; $i <= 4; $i++) {
            $column = 'answer_' . $i;
            $isTrueColumn = 'answer_' . $i . '_is_true';
            if (!$this->$isTrueColumn) {
                $incorrectAnswers[] = $this->$column;
            }
        }
        return $incorrectAnswers;
    }
}
