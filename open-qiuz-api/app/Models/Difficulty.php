<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Difficulty extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function questions()
    {
        return $this->belongsToMany(Question::class, 'difficulty_id');
    }
}
