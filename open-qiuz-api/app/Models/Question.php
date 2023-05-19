<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'question',
        'is_approved',
        'category_id',
        'difficulty_id'
    ];

    public function categories()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function difficulties()
    {
        return $this->belongsTo(Difficulty::class, 'difficulty_id');
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
