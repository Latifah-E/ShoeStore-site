<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\category;
use database\factories\CategoryFactory;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        category::factory()->times(4)->create();
    }
}
