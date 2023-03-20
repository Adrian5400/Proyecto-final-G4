<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Preparation;

class PreparationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Preparation::create([
            'id' => 1,
            'titulo' => 'Entrar al vestuario designado',
            'desc' => 'Independientemente de la instalación en que operes, el sitio contará con un vestidor designado para reducir el riesgo de contaminación. Aquí, cambiarás tu ropa de calle por la ropa quirúrgica. Después de la cirugía, regresarás al vestidor para lavarte y volver a ponerte la ropa de calle.',
        ]);

        Preparation::create([
            'id' => 2,
            'titulo' => 'Atarse el pelo',
            'desc' => 'Átate el cabello, por más que sea largo o de mediana longitud. Llévalo hacia atrás con un moño o una coleta. No permitas que ningún cabello cuelgue sobre el rostro. Asegúrate de que tu peinado quepa fácilmente bajo el gorro o la pañoleta.',
        ]);

        Preparation::create([
            'id' => 3,
            'titulo' => 'Cubrirse el pelo',
            'desc' => 'El cabello, la caspa y las células escamosas caen de la cabeza sin siquiera notarlo. Por lo tanto, cubrirte la cabeza es esencial para la seguridad de tus pacientes. Usa un cobertor quirúrgico estándar o una capucha que el hospital te proporcione. Asegúrate de que el material esté libre de pelusas y sea lo suficientemente grande para contener todo tu cabello. Si tienes patillas o vello facial, usa una capucha quirúrgica para cubrir estas áreas. No uses cofias para cirujanos, dado que no cubren apropiadamente el cabello.',
        ]);

        Preparation::create([
            'id' => 4,
            'titulo' => 'Ponerse la mascarilla',
            'desc' => 'Esto permite evitar que las bacterias, la saliva y la mucosa contaminen las manos durante la limpieza. También cubre el vello facial que puede tener caspa o células escamosas contaminantes. Asegúrate de que la tela te cubra la nariz y boca. Ata las cuerdas detrás de la cabeza. La mascarilla debe estar asegurada sin cortar el flujo de aire',
        ]);


        Preparation::create([
            'id' => 5,
            'titulo' => 'Quitarse la joyería',
            'desc' => 'Las joyas son portadoras de microbios que pueden infectar a tu paciente. Quítate el reloj, los brazaletes, los anillos, etc. y guárdalos en tu casillero. Asegúrate de no tener nada en las manos y los brazos.',
        ]);

        Preparation::create([
            'id' => 6,
            'titulo' => 'Ponerse el traje quirúrgico',
            'desc' => ' El mismo está compuesto por una camiseta y un pantalón. Ponte primero la camiseta. Si usas otra camiseta abajo, un sostén o una camisola, la camiseta debe cubrir la prenda por completo. Ni siquiera el collar o las tiras pueden salir del escote de la camiseta quirúrgica. Después de ponerte la camiseta, ponte el pantalón. Ponte la camiseta dentro de la cinturilla para evitar que la tela que sobresale y la piel caigan o toquen zonas esterilizadas.',
        ]);

        Preparation::create([
            'id' => 7,
            'titulo' => 'Sacar un cepillo nuevo',
            'desc' => 'Cada cepillo se envasa de manera individual para permanecer estéril. Rompe el reverso del envase plástico. Cuando lo abras, busca una lima. Quítala con tu mano dominante. Mantén el cepillo en el envase por ahora.',
        ]);

        Preparation::create([
            'id' => 8,
            'titulo' => 'Ajusta la temperatura del agua para que salga tibia',
            'desc' => 'Ajusta la temperatura de agua para que salga tibia. El jabón antimicrobiano es más efectivo con agua tibia. Evita el uso de agua demasiado caliente, dado que podría secar e irritar la piel. También debes evitar el agua fría, dado que impide que el jabón forme la espuma correctamente.',
        ]);

        Preparation::create([
            'id' => 9,
            'titulo' => 'Mantén seco tu ropaje quirúrjico',
            'desc' => 'Asegúrate de no derramar agua sobre el atuendo en ningún momento durante el procedimiento de lavado. Si tu atuendo se moja, puede contaminarse. Esto significa que tendrás que cambiarte la ropa y comenzar el proceso de limpieza nuevamente.',
        ]);

        Preparation::create([
            'id' => 10,
            'titulo' => 'Limpia debajo de las uñas',
            'desc' => 'Quita la lima del envase del cepillo. Sujétala con tu mano dominante. Coloca la otra mano bajo agua. Permite que el agua fluya entre la punta de los dedos y las uñas mientras quitas la suciedad con la lima. Repite el proceso con cada dedo de ambas manos. Asegúrate de quitar toda la mugre y suciedad. Tira la lima a la basura cuando termines.',
        ]);

        Preparation::create([
            'id' => 11,
            'titulo' => 'Saca el cepillo del envase',
            'desc' => 'Sujeta el lado plástico del envase con una mano. Permite que el cepillo caiga sobre la otra mano. Tira el envase a la basura. Apunta con cuidado para evitar que el cepillo caiga sobre el suelo u otra superficie antihigiénica. Ten en cuenta que algunas instalaciones utilizan técnicas de limpieza sin cepillo, dado que algunos estudios han demostrado que permiten alcanzar un recuento bacteriano inferior.',
        ]);


        Preparation::create([
            'id' => 12,
            'titulo' => 'Aplica jabón antimicrobiano o yodado en el cepillo',
            'desc' => 'Encontrarás al menos dos dispensadores sobre el fregadero a poca distancia. El yodo tiene un tinte amarronado. Los jabones tienen una tonalidad rosada o azul. Usa el codo para bombear el dispensador de jabón o yodo. Bombear dos veces generalmente es suficiente. Asegúrate de que el jabón o yodo caiga en el lado áspero del cepillo.',
        ]);

        Preparation::create([
            'id' => 13,
            'titulo' => 'Limpiate la punta de los dedos',
            'desc' => 'Pasa el cepillo con movimientos circulares. Limpia debajo de la punta de las uñas para quitar cualquier resto de suciedad que puedas haber pasado por alto con la lima. Limpia durante 30 a 60 segundos en cada mano. Tira el cepillo a la basura cuando termines. Si cuentas cada vez que pasas el cepillo, en vez de tomarte el tiempo, haz 30 movimientos circulares en cada mano.',
        ]);

        Preparation::create([
            'id' => 14,
            'titulo' => 'Lávate las manos',
            'desc' => 'Para este paso, usa clorhexidina o yodo. Sigue realizando movimientos circulares sobre las manos. Limpia entre los dedos, y la parte delantera y trasera de las manos para eliminar las bacterias. Hazlo por dos minutos. Si tardas mucho con este paso, las bacterias podrían acumularse en tus brazos.Si cuentas cada vez que pasas el cepillo, haz 20 movimientos circulares en cada lado de la mano.',
        ]);

        Preparation::create([
            'id' => 15,
            'titulo' => 'Frótate los brazos',
            'desc' => 'Muévete en una dirección desde la base de la palma hacia el codo. Lava hasta 5 u 8 cm (2 a 3 pulgadas) arriba del codo durante un minuto. Sigue manteniendo las manos en alto para evitar que el jabón contaminado te ensucie las manos limpias. Mantén las manos más alto que los brazos durante todo el proceso. Esto evita que el jabón contaminado y las bacterias te ensucien las manos. Si el jabón contaminado te toca las manos, tendrás que repetir el proceso. Si cuentas cada pasada, haz 20 pasadas en cada lado del antebrazo.',
        ]);

        Preparation::create([
            'id' => 16,
            'titulo' => 'Enjuágate las manos y los brazos',
            'desc' => ' Evita moverlos hacia adelante y atrás en el agua. Enjuaga desde la punta de los dedos hasta los codos. Procura hacer un movimiento rápido del brazo en una dirección. Este paso solo tomará aproximadamente tres segundos por brazo. Permite que el exceso de agua gotee de las manos y los brazos, sin agitarlos.',
        ]);

        Preparation::create([
            'id' => 17,
            'titulo' => 'Espera hasta entrar en el quirófano',
            'desc' => 'No debes secarte las manos hasta entrar al quirófano. Cuando entres, tendrás que secarte bien las manos y los brazos con la técnica aséptica. Asegúrate de secarte las manos y los brazos antes de ponerte la bata estéril.',
        ]);

        Preparation::create([
            'id' => 18,
            'titulo' => 'Toma una toalla',
            'desc' => 'Un paquete especial de toallas esterilizadas estará incluido en la parte superior del paquete con la bata quirúrgica. Inclínate un poco hacia adelante para tomar el paquete de toallas. Tómalo y aléjate de la mesa para mantener tu bata esterilizada. Abre el paquete para que la toalla esté plegada longitudinalmente mientras lo abres. Mantén la toalla alejada de cualquier cosa que no esté esterilizada. Coloca las manos hacia arriba, por encima de los antebrazos. Asegúrate de que los brazos no toquen tu cuerpo.',
        ]);

        Preparation::create([
            'id' => 19,
            'titulo' => 'Sécate las manos y los brazos',
            'desc' => 'Sujeta un extremo de la toalla con tu mano dominante. Sécate el otro brazo y la otra mano con movimientos circulares. Comienza en la punta de los dedos y termina en el codo. Asegúrate de secar cada parte de la mano y el antebrazo. No retrocedas hacia otra área que hayas secado.',
        ]);

        Preparation::create([
            'id' => 20,
            'titulo' => 'Toma el otro extremo de la toalla con tu mano no dominante',
            'desc' => 'Repite el proceso con tu brazo y mano dominante, teniendo cuidado de no volver sobre las pasadas. Tira la toalla cuando termines.',
        ]);
    }
}
