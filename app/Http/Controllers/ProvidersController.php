<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class ProvidersController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $image = $request->input('image');
        $provider = $request->input('provider');
        $provider_id = $request->input('provider_id');
        $provider_token = $request->input('access_token');

        $user = User::where('email', $email)->first();
        if (!$user) {
            $user = User::create([
                'name' => $name,
                'email' => $email,
                'image' => $image,
                'provider' => $provider,
                'provider_id' => $provider_id,
                'provider_token' => $provider_token,
                'password' => Hash::make(Str::random(24)),
            ]);
        }else{
            $user->update([
                'name' => $name,
                'email' => $email,
                'image' => $image,
                'provider' => $provider,
                'provider_id' => $provider_id,
                'provider_token' => $provider_token,
            ]);
        }

        auth()->login($user);

        return response()->json([
            'status' => 'success',
            'message' => 'Signed in with ' . $provider . ' successfully!',
        ]);
    }
}
