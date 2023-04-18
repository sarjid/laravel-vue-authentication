<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\Auth\LoginResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Email or password incorrect.'],
            ]);
        }

        $token =  $user->createToken('user-token')->plainTextToken;
        // return (new LoginResource($user))
        //     ->additional([
        //         'token' => $token,
        //     ]);

        return new LoginResource([
            'name' => $user->name,
            'email' => $user->email,
            'token' => $token,
        ]);
    }


    public function logout(Request $request)
    {

        $request->user()->tokens()->delete();
        return response()->json(['message' => 'User Logout Success']);
    }
}
