<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'question' => 'required',
            'category_id' => 'required',
            'difficulty_id' => 'required',
            'answer_1' => 'required',
            'answer_2' => 'required',
            'answer_3' => 'required',
            'answer_4' => 'required',
            'answer_1_is_true' => 'required',
            'answer_2_is_true' => 'required',
            'answer_3_is_true' => 'required',
            'answer_4_is_true' => 'required',
        ];
    }
}
