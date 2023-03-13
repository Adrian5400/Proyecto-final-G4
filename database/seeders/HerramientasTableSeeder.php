<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Herramienta;

class HerramientasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Herramienta::create([
            'nombre' => 'Heparina Sodica',
            'desc' => 'Descripcion de la herramienta 1',
            'image' => 'imagen1.jpg',
            'steps' => 1,
        ]);

        Herramienta::create([
            'nombre' => 'Electrodo marcapasos',
            'desc' => 'Descripcion de la herramienta 2',
            'image' => 'imagen2.jpg',
            'steps' => 2,
        ]);

        Herramienta::create([
            'nombre' => 'Cateter pigtail',
            'desc' => 'Descripcion de la herramienta 3',
            'image' => 'imagen3.jpg',
            'steps' => implode(',', [3, 11, 13]),
        ]);

        Herramienta::create([
            'nombre' => 'Sistema de radioscopia',
            'desc' => 'Descripcion de la herramienta 4',
            'image' => 'imagen4.jpg',
            'steps' => implode(',', [4, 14, 16]),
        ]);

        Herramienta::create([
            'nombre' => 'Bisturí',
            'desc' => 'Descripcion de la herramienta 5',
            'image' => 'imagen5.jpg',
            'steps' => implode(',', [5, 8]),
        ]);

        Herramienta::create([
            'nombre' => 'Sierra oscilante',
            'desc' => 'Descripcion de la herramienta 6',
            'image' => 'imagen6.jpg',
            'steps' => 5,
        ]);

        Herramienta::create([
            'nombre' => 'Miniseparador esternal',
            'desc' => 'Descripcion de la herramienta 7',
            'image' => 'imagen7.jpg',
            'steps' => 6,
        ]);

        Herramienta::create([
            'nombre' => 'Punto quirurjico',
            'desc' => 'Descripcion de la herramienta 8',
            'image' => 'imagen8.jpg',
            'steps' => implode(',', [6, 7, 17]),
        ]);

        Herramienta::create([
            'nombre' => 'Introductor arterial 6F',
            'desc' => 'Descripcion de la herramienta 9',
            'image' => 'imagen9.jpg',
            'steps' => implode(',' ,[8, 12]),
        ]);

        Herramienta::create([
            'nombre' => 'Valvula',
            'desc' => 'Descripcion de la herramienta 10',
            'image' => 'imagen10.jpg',
            'steps' => implode(',', [13, 15, 17]),
        ]);

        Herramienta::create([
            'nombre' => 'Guia teflonda recta 35cm',
            'desc' => 'Descripcion de la herramienta 11',
            'image' => 'imagen11.jpg',
            'steps' => implode(',' , [9, 11]),
        ]);

        Herramienta::create([
            'nombre' => 'Cateter Amplatz AL1',
            'desc' => 'Descripcion de la herramienta 12',
            'image' => 'imagen12.jpg',
            'steps' => 10,
        ]);
        
        Herramienta::create([
            'nombre' => 'Cateter Amplatz AL2',
            'desc' => 'Descripcion de la herramienta 13',
            'image' => 'imagen13.jpg',
            'steps' => 10,
        ]);

        Herramienta::create([
            'nombre' => 'Guia teflonda extrastiff',
            'desc' => 'Descripcion de la herramienta 14',
            'image' => 'imagen14.jpg',
            'steps' => implode(',', [11, 17]),
        ]);

        Herramienta::create([
            'nombre' => 'Introductor certitude',
            'desc' => 'Descripcion de la herramienta 15',
            'image' => 'imagen15.jpg',
            'steps' => implode(',', [12, 17]),
        ]);
        
        Herramienta::create([
            'nombre' => 'Cateter balon',
            'desc' => 'Descripcion de la herramienta 16',
            'image' => 'imagen16.jpg',
            'steps' => implode(',', [13, 15, 17]),
        ]);


        


    
    }
}
