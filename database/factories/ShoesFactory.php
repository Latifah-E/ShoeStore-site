<?php

namespace Database\Factories;

use App\Models\Shoes;
use Illuminate\Database\Eloquent\Factories\Factory;

class ShoesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Shoes::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->word,
            'brand'=>$this->faker->company,
            'category_id'=>$this->faker->word,
            'stock'=>$this->faker->randomDigit,
            'path'=>$this->faker->imageUrl,
            'price'=>$this->faker->randomFloat
        ];
    }
}
