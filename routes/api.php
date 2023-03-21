<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Http\Controllers\HerramientaController;
use app\Http\Controllers\UserController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/herramientas', 'App\Http\Controllers\HerramientaController@index');
Route::get('/users', 'App\Http\Controllers\UserController@index');
Route::post('/users', 'App\Http\Controllers\UserController@store');
Route::post('/login', 'App\Http\Controllers\UserController@login');
Route::delete('/users/{email}', 'App\Http\Controllers\UserController@delete');
Route::delete('/herramientas/{id}', 'App\Http\Controllers\HerramientaController@destroy');
Route::post('/herramientas', 'App\Http\Controllers\HerramientaController@store');
Route::get('/pasos', 'App\Http\Controllers\PasoController@index');
Route::get('/preparations', 'App\Http\Controllers\PreparationsController@index');
