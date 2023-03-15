<?php

namespace App\Http\Controllers;

use App\Models\Herramienta;
use Illuminate\Http\Request;

class HerramientaController extends Controller
{
    public function index()
    {
        $herramientas = Herramienta::select('id', 'nombre', 'desc', 'image','steps')->get();

        // Map each Herramienta object to a new object that includes the image URL
        $data = $herramientas->map(function ($herramienta) {
            return [
                'id' => $herramienta->id,
                'nombre' => $herramienta->nombre,
                'desc' => $herramienta->desc,
                'image_url' => asset('storage/' . $herramienta->image),
                'steps'=> $herramienta->steps
            ];
        });

        return response()->json($data);
    }


    public function destroy($id){
        $herramienta = Herramienta::findOrFail($id);
        if ($herramienta) {
            $herramienta->delete();
            return response()->json(['message' => 'Herramienta eliminada exitosamente.']);
        } else {
            return response()->json(['message' => 'Herramienta no encontrada.']);
        }
    }

    public function store(Request $request){
        $herramienta = new Herramienta;
        $herramienta->nombre = $request->nombre;
        $herramienta->desc = $request->desc;
        $herramienta->image= $request->file('image')->store('public/herramientas');

        $herramienta->steps = $request->steps;
        $herramienta->save();
    }

}
