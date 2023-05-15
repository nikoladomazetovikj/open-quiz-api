<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $fillable = [
        'answer_1',
        'answer_2',
        'answer_3',
        'answer_4',
        'answer_1_is_true',
        'answer_2_is_true',
        'answer_3_is_true',
        'answer_4_is_true',
        'question_id'
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
