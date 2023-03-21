<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Preparation;

class PreparationsController extends Controller
{
    public function index()
    {
        $preparations = Preparation::select('id', 'titulo', 'desc')->get();

        $data = $preparations->map(function ($preparation) {
            return [
                'id' => $preparation->id,
                'titulo' => $preparation->titulo,
                'desc' => $preparation->desc,
            ];
        });

        return response()->json($data);
    }
}
