<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientQuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'question' => $this->question,
            'category' => $this->categories->name,
            'difficulty' => $this->difficulties->name,
            'answers' => ClientAnswerResource::collection($this->answers)
        ];
    }
}
