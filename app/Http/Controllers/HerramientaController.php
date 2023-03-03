<?php

namespace App\Http\Controllers;

use App\Models\Herramienta;

use Illuminate\Http\Request;

class HerramientaController extends Controller
{
    public function index()
    {
        return Herramienta::select('id', 'nombre')->get();
    }
}
