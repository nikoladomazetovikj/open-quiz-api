<?php

namespace Database\Seeders;

use App\Enums\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                'id' => Category::SPORT->value,
                'name' => Category::SPORT->name,
            ],
            [
                'id' => Category::HISTORY->value,
                'name' => Category::HISTORY->name,
            ],
            [
                'id' => Category::POLITICS->value,
                'name' => Category::POLITICS->name,
            ],
            [
                'id' => Category::ANIMALS->value,
                'name' => Category::ANIMALS->name,
            ],
            [
                'id' => Category::MUSIC->value,
                'name' => Category::MUSIC->name,
            ],
        ]);
    }
}
