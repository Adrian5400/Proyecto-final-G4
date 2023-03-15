<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Paso;

class PasosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Paso::create([
            'id' => 1,
            'numeroPaso' => 1,
            'desc' => 'Se administra heparina sodica para evitar trombos',
        ]);
    

    Paso::create([
        'id' => 2,
        'numeroPaso' => 2,
        'desc' => 'Se introduce un electrodo de marcapasos de fijacion pasiva por la vena femoral derecha',
    ]);

    Paso::create([
        'id' => 3,
        'numeroPaso' => 3,
        'desc' => 'Se introduce un cateter " pigtail" centimetrado en la arteria femoral derecha para localizar el plano valvular, aortografias y confirmar distancias.',
    ]);

    Paso::create([
        'id' => 4,
        'numeroPaso' => 4,
        'desc' => 'Se coloca el sistema de radioscopia. El angulo lo da el tc mencionado anteriormente',
    ]);
    
    Paso::create([
        'id' => 5,
        'numeroPaso' => 5,
        'desc' => 'Se realiza una "miniincision" de 4cm en la piel, y se practica la miniesternotomia (corte a traves del tercio superior
        del esternon) con una sierra oscilante hasta el segundo espacio intercostal (arriba a la izquierda del pectoral izquierdo)',
    ]);

    Paso::create([
        'id' => 6,
        'numeroPaso' => 6,
        'desc' => 'Se coloca un miniseparador esternal, se abre el perciardio y se aplican puntos de traccion hacia arriba',
    ]);
    
    Paso::create([
        'id' => 7,
        'numeroPaso' => 7,
        'desc' => 'Se emplean dos suturas en bolsa de tabaco (una movida rara de anudar parte del cuerpo bajo la piel) sobre la aorta ascendente',
    ]);

    Paso::create([
        'id' => 8,
        'numeroPaso' => 8,
        'desc' => 'Se practica una puncion (agujerear parte del cuerpo para que salga liquido) en la bolsa de tabaco y se inserta un introductor arterial de 6 F',
    ]);

    Paso::create([
        'id' => 9,
        'numeroPaso' => 9,
        'desc' => ' Para cruzar retrogradamente la valvula aortica se realizan con una guia teflonada recta de 35cm y 260cm de largo, a veces con guias hidrofilicas.',
    ]);

    Paso::create([
        'id' => 10,
        'numeroPaso' => 10,
        'desc' => 'Para pacientes con raices aorticas pequeñas se utiliza el cateter Amplatz AL1 y para grandes el Amplatz AL2',
    ]);

    Paso::create([
        'id' => 11,
        'numeroPaso' => 11,
        'desc' => 'Cuando el cateter haya cruzado la valvula aortica, se intercambia la guia usada por una "extrastiff". Debe tener una curva suave
        y se debe adaptar al ventriculo, asi que normalmente se necesita un pigtail para ayudar a su colocacion',
    ]);

    Paso::create([
        'id' => 12,
        'numeroPaso' => 12,
        'desc' => 'Posteriormente, se retira el introductor de 6 F y se coloca el introductor "Certitude" en la aorta hasta la marca de 2cm. Debe hacerse de manera muy suave y controlada porque no tenemos guia en el ventriculo',
    ]);

    Paso::create([
        'id' => 13,
        'numeroPaso' => 13,
        'desc' => 'Se introduce la prótesis hasta el plano anular guiados por el "pigtail", con el punto del centro quedando un poco por encima
        de dicho plano',
    ]);

    Paso::create([
        'id' => 14,
        'numeroPaso' => 14,
        'desc' => 'Se practica sobreestimulación y una aortografía tras la caída de presión arterial',
    ]);

    Paso::create([
        'id' => 15,
        'numeroPaso' => 15,
        'desc' => 'Se expande la prótesis con inflado muy lento para reajustar si fuera necesario',
    ]);

    Paso::create([
        'id' => 16,
        'numeroPaso' => 16,
        'desc' => 'Se realiza una ecocardiografía para ver si la protesis tira bien',
    ]);

    Paso::create([
        'id' => 17,
        'numeroPaso' => 17,
        'desc' => 'Se retiran la guia, cateter balon y el introductor. Se anudan las bolsas de tabaco y cierran las incisiones',
    ]);

    Paso::create([
        'id' => 18,
        'numeroPaso' => 18,
        'desc' => 'El paciente tiraria para la uci y se retiran los drenajes al dia siguiente',
    ]);
    
}

}



