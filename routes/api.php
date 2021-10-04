<?php
use App\Http\Controllers\ShoesController;
use App\Http\Controllers\CategoryController;
use App\Models\category;
use App\Models\Shoes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::resource('shoes', ShoesController::class);
Route::resource('categories', CategoryController::class);
Route::get('category_id={id}',function($id){
    return category::find($id)->shoes;
});
Route::get('brand={brand}',function($brand){
    return Shoes::find($brand);
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
