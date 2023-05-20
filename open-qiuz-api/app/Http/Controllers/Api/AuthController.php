<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $responseData = ['error' => null, 'token' => null];

        $user = User::where('email', $request->email)->first();

        if (empty($user)) {
            $responseData['error'] = 'Wrong email or password';

            return response()->json($responseData);
        }

        if (Hash::check($request->password, $user->password)) {
            $token = $user->createToken($user->name)->plainTextToken;
            $responseData['token'] = $token;

            return response()->json($responseData);
        } else {
            $responseData['error'] = 'Wrong password';

            return response()->json($responseData);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->noContent();
    }
}
