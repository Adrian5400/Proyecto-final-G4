<?php

namespace App\Http\Controllers;

use App\Models\Paso;
use Illuminate\Http\Request;

class PasoController extends Controller
{
    public function index()
    {
        $pasos = Paso::select('id', 'titulo', 'numeroPaso', 'desc')->get();

        // Map each Herramienta object to a new object that includes the image URL
        $data = $pasos->map(function ($paso) {
            return [
                'id' => $paso->id,
                'titulo' => $paso->titulo,
                'numeroPaso' => $paso->numeroPaso,
                'desc' => $paso->desc,
            ];
        });

        return response()->json($data);
    }


    public function destroy($id){
        $paso = Paso::findOrFail($id);
        if ($paso) {
            $paso->delete();
            return response()->json(['message' => 'Paso eliminado correctamente.']);
        } else {
            return response()->json(['message' => 'Paso no encontrado.']);
        }
    }

}