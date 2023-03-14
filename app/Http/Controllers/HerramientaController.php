<?php

namespace App\Http\Controllers;

use App\Models\Herramienta;
use Illuminate\Http\Request;

class HerramientaController extends Controller
{
    public function index()
    {
        $herramientas = Herramienta::select('id', 'nombre', 'desc', 'image')->get();

        // Map each Herramienta object to a new object that includes the image URL
        $data = $herramientas->map(function ($herramienta) {
            return [
                'id' => $herramienta->id,
                'nombre' => $herramienta->nombre,
                'desc' => $herramienta->desc,
                'image_url' => asset('storage/' . $herramienta->image),
                'steps' => $herramienta->steps,
            ];
        });

        return response()->json($data);
    }
}
