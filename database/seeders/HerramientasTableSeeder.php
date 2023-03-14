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
            'desc' => 'La heparina sódica es un anticoagulante que se utiliza para prevenir la formación de coágulos en la sangre y tratar trastornos de la coagulación. Se administra por vía intravenosa y su objetivo es evitar la formación de coágulos en la circulación sanguínea',
            'image' => 'imagen1.jpg',
            'steps' => 1,
        ]);

        Herramienta::create([
            'nombre' => 'Electrodo marcapasos',
            'desc' => 'El electrodo marcapasos es un dispositivo utilizado en la cirugía cardíaca para monitorizar y controlar el ritmo cardíaco. Se coloca en el corazón y se conecta a un marcapasos externo que envía impulsos eléctricos para regular el ritmo cardíaco',
            'image' => 'imagen2.jpg',
            'steps' => 2,
        ]);

        Herramienta::create([
            'nombre' => 'Cateter pigtail',
            'desc' => 'El catéter pigtail es un tubo flexible que se utiliza para drenar fluidos de la cavidad abdominal. Se introduce a través de una pequeña incisión en la piel y se dirige hacia el área a drenar. Se usa en procedimientos como la extracción de líquido del pulmón.',
            'image' => 'imagen3.jpg',
            'steps' => implode(',', [3, 11, 13]),
        ]);

        Herramienta::create([
            'nombre' => 'Sistema de radioscopia',
            'desc' => 'La radioscopia es un método de diagnóstico por imagen que utiliza rayos X y tecnología de video para producir imágenes en tiempo real de las estructuras internas del cuerpo. Se utiliza comúnmente durante los procedimientos quirúrgicos para guiar la colocación de dispositivos y para monitorear la progresión del procedimiento.',
            'image' => 'imagen4.jpg',
            'steps' => implode(',', [4, 14, 16]),
        ]);

        Herramienta::create([
            'nombre' => 'Bisturí',
            'desc' => 'El bisturí es un instrumento quirúrgico de corte utilizado para realizar incisiones en la piel y los tejidos subyacentes durante una operación.',
            'image' => 'imagen5.jpg',
            'steps' => implode(',', [5, 8]),
        ]);

        Herramienta::create([
            'nombre' => 'Sierra oscilante',
            'desc' => 'La sierra oscilante es una herramienta quirúrgica que se utiliza para cortar y remodelar huesos en procedimientos de ortopedia.',
            'image' => 'imagen6.jpg',
            'steps' => 5,
        ]);

        Herramienta::create([
            'nombre' => 'Miniseparador esternal',
            'desc' => 'El miniseparador esternal es una herramienta quirúrgica utilizada para separar suavemente los bordes de una incisión en el esternón durante procedimientos de cirugía cardíaca.',
            'image' => 'imagen7.jpg',
            'steps' => 6,
        ]);

        Herramienta::create([
            'nombre' => 'Punto quirurjico',
            'desc' => 'El punto quirúrgico es una técnica de sutura utilizada para cerrar heridas y cortes en la piel. Se realiza con una aguja de sutura y hilo de sutura, y se usa para mantener los bordes de la piel juntos mientras cicatrizan.',
            'image' => 'imagen8.jpg',
            'steps' => implode(',', [6, 7, 17]),
        ]);

        Herramienta::create([
            'nombre' => 'Introductor arterial 6F',
            'desc' => 'El introductor arterial 6F es un tubo flexible que se utiliza para acceder a la arteria femoral durante procedimientos de cateterización cardíaca. Se inserta en la arteria y se utiliza para guiar otros instrumentos quirúrgicos.',
            'image' => 'imagen9.jpg',
            'steps' => implode(',' ,[8, 12]),
        ]);

        Herramienta::create([
            'nombre' => 'Valvula',
            'desc' => 'La válvula es un dispositivo utilizado en la cirugía cardíaca para reemplazar o reparar una válvula cardíaca dañada. Pueden ser biológicas o mecánicas y se colocan en el corazón para regular el flujo sanguíneo.',
            'image' => 'imagen10.jpg',
            'steps' => implode(',', [13, 15, 17]),
        ]);

        Herramienta::create([
            'nombre' => 'Guia teflonda recta 35cm',
            'desc' => 'La guía teflonada recta es un dispositivo utilizado para guiar y dirigir instrumentos quirúrgicos durante procedimientos de cateterización cardíaca. Es un tubo flexible que se inserta en la arteria y se utiliza para guiar otros instrumentos quirúrgicos.',
            'image' => 'imagen11.jpg',
            'steps' => implode(',' , [9, 11]),
        ]);

        Herramienta::create([
            'nombre' => 'Cateter Amplatz AL1',
            'desc' => 'El catéter amplatz AL1/AL2 es un dispositivo utilizado en la cirugía cardíaca para medir la presión en las cámaras del corazón. Se inserta a través de una incisión en la ingle y se dirige hacia el corazón.',
            'image' => 'imagen12.jpg',
            'steps' => 10,
        ]);
        
        Herramienta::create([
            'nombre' => 'Cateter Amplatz AL2',
            'desc' => 'El catéter amplatz AL1/AL2 es un dispositivo utilizado en la cirugía cardíaca para medir la presión en las cámaras del corazón. Se inserta a través de una incisión en la ingle y se dirige hacia el corazón.',
            'image' => 'imagen13.jpg',
            'steps' => 10,
        ]);

        Herramienta::create([
            'nombre' => 'Guia teflonda extrastiff',
            'desc' => 'Una guía extrarígida utilizada en procedimientos de intervencionismo vascular, cardíaco o neurovascular. Su rigidez permite guiar el catéter o la sonda en áreas de difícil acceso o para pasar por obstrucciones.',
            'image' => 'imagen14.jpg',
            'steps' => implode(',', [11, 17]),
        ]);

        Herramienta::create([
            'nombre' => 'Introductor certitude',
            'desc' => ' Un dispositivo utilizado para la colocación de marcapasos. Se inserta en la vena subclavia y guía el electrodo del marcapasos hacia el corazón.',
            'image' => 'imagen15.jpg',
            'steps' => implode(',', [12, 17]),
        ]);
        
        Herramienta::create([
            'nombre' => 'Cateter balon',
            'desc' => 'Es un dispositivo médico utilizado para tratar estenosis, aneurismas y otras enfermedades vasculares. Consiste en un tubo flexible con un balón en la punta que se infla en el sitio de la obstrucción o el aneurisma para abrir el vaso sanguíneo o sellar el aneurisma.',
            'image' => 'imagen16.jpg',
            'steps' => implode(',', [13, 15, 17]),
        ]);


        


    
    }
}
