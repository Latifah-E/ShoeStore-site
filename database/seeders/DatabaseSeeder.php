<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\category;
use App\Models\Shoes;
use database\factories\ShoesFactory;
use database\factories\CategoryFactory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Shoes::factory()->times(50)->create();
        category::factory()->times(4)->create();
    }
}
