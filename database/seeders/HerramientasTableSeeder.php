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
        // Generate 5 rows for herramientas table using factory
        Herramienta::factory()->count(5)->create();
    }
}
