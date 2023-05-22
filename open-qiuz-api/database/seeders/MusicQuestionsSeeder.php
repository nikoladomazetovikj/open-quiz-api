<?php

namespace Database\Seeders;

use App\Enums\Category;
use App\Enums\Difficulty;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class MusicQuestionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::get('https://opentdb.com/api.php', [
            'amount' => 50,
            'category' => 12,
            'type' => 'multiple',
        ]);

        $data = $response->json();

        if ($response->ok() && $data['response_code'] === 0) {
            // Data retrieval successful, proceed to insert into the database
            $questions = $data['results'];

            foreach ($questions as $question) {

                $difficulty = Difficulty::EASY->value; // Set the default difficulty to EASY

                // Determine difficulty based on question difficulty level
                if (isset($question['difficulty'])) {
                    switch ($question['difficulty']) {
                        case 'medium':
                            $difficulty = Difficulty::MEDIUM->value;
                            break;
                        case 'hard':
                            $difficulty = Difficulty::HARD->value;
                            break;
                    }
                }

                $questionId = DB::table('questions')->insertGetId([
                    'question' => $question['question'],
                    'difficulty_id' => $difficulty,
                    'category_id' => Category::MUSIC->value,
                    'is_approved' => true,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);

                $correctAnswer = $question['correct_answer'];
                $incorrectAnswers = $question['incorrect_answers'];
                $answers = array_merge([$correctAnswer], $incorrectAnswers);

                // Shuffle the answers to ensure randomness
                shuffle($answers);

                $answerData = [
                    'question_id' => $questionId,
                    'answer_1' => $answers[0],
                    'answer_2' => $answers[1],
                    'answer_3' => $answers[2],
                    'answer_4' => $answers[3],
                    'answer_1_is_true' => $answers[0] === $correctAnswer,
                    'answer_2_is_true' => $answers[1] === $correctAnswer,
                    'answer_3_is_true' => $answers[2] === $correctAnswer,
                    'answer_4_is_true' => $answers[3] === $correctAnswer,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ];


                DB::table('answers')->insert($answerData);
            }
        } else {
            // Data retrieval failed, handle the error accordingly
            $errorMessage = $data['error'] ?? 'Unknown error';
            $this->command->error("Failed to retrieve data from the API: {$errorMessage}");
        }
    }
}
