<?php

namespace Database\Seeders;

use App\Enums\Difficulty;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DifficultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('difficulties')->insert([
            [
                'id' => Difficulty::EASY->value,
                'name' => Difficulty::EASY->name
            ],
            [
                'id' => Difficulty::MEDIUM->value,
                'name' => Difficulty::MEDIUM->name
            ],
            [
                'id' => Difficulty::HARD->value,
                'name' => Difficulty::HARD->name
            ],
        ]);
    }
}
