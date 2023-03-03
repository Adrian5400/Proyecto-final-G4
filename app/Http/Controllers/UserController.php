<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::select('name', 'email', 'password')->get();
        return response()->json($users);
    }


    public function store(Request $request)
{
    $user = new User();
    $user->name = $request->input('name');
    $user->email = $request->input('email');
    $user->password = bcrypt($request->input('password')); // esto encripta la contraseña que manda el post
    $user->save();

    return response()->json(['message' => 'Usuario creado con éxito', 'user' => $user]);
}


public function login(Request $request)
{
    $email = $request->input('email');
    $password = $request->input('password');

    $user = User::where('email', $email)->first();

    if (!$user) {
        return response()->json(['error' => 'No existe ese usuario'], 404);
    }

    if (Hash::check($password, $user->password)) {
        return response()->json(['message' => 'Email/Contraseña coinciden'], 200);
    } else {
        return response()->json(['error' => 'Contraseña inválida'], 401);
    }
}


}
