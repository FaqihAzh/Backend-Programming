<?php

namespace App\Http\Controllers;

use Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // Animals Property
    public $animals = ['Kucing', 'Ayam', 'Ikan'];

    public function index() {
        echo "Menampilkan data animals : ";
        foreach ($this->animals as $animal){
            print_r($animal. ', ');
        }
    }

    public function store(Request $request) {
        echo "Menambahkan $request->nama ke dalam data animals --> ";
        array_push($this->animals, $request->nama);
        echo $this->index();
    }

    public function update(Request $request, $id) {
        echo "Mengubah data id ke-$id menjadi $request->nama --> ";
        $this->animals[$id] = $request->nama;
        echo $this->index();

    }

    public function destroy($id) {
        echo "Menghapus data id ke-$id dari data animals --> ";
        unset($this->animals[$id]);
        echo  $this->index();
    }
}
