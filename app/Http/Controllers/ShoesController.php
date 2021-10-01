<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shoes;
class ShoesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Shoes::orderBy('created_at', 'asc')->get();  
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [ //inputs are not empty or null
            'name' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'brand' => 'required',
            'path' => 'required',
            'category' => 'required',
        ]);
  
        $shoe = new Shoes;
        $shoe->name = $request->input('name'); //retrieving user inputs
        $shoe->price = $request->input('price');  //retrieving user inputs
        $shoe->stock = $request->input('stock');  //retrieving user inputs
        $shoe->brand = $request->input('brand');  //retrieving user inputs
        $shoe->path = $request->input('path');  //retrieving user inputs
        $shoe->category = $request->input('category');  //retrieving user inputs
        $shoe->save(); //storing values as an object
        return $shoe; //returns the stored value if the operation was successful.
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return shoes::findorFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [ // the new values should not be null
            'name' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'brand' => 'required',
            'path' => 'required',
            'category' => 'required',
        ]);
  
        $shoe = Shoes::findorFail($id); // uses the id to search values that need to be updated.
        $shoe->name = $request->input('name'); //retrieving user inputs
        $shoe->price = $request->input('price');  //retrieving user inputs
        $shoe->stock = $request->input('stock');  //retrieving user inputs
        $shoe->brand = $request->input('brand');  //retrieving user inputs
        $shoe->path = $request->input('path');  //retrieving user inputs
        $shoe->category = $request->input('category');  //retrieving user inputs
        $shoe->save();//saves the values in the database. The existing data is overwritten.
        return $shoe; // retrieves the updated object from the database
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $shoe = Shoes::findorFail($id); //searching for object in database using ID
        if($shoe->delete()){ //deletes the object
            return 'deleted successfully'; //shows a message when the delete operation was successful.
        }
    }
}
