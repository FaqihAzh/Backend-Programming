<?php

class Animal
{
  public $animal;

  public function __construct($data){
    $this->animal = $data;
  }

  public function index(){
    foreach ($this->animal as $animals){
      echo $animals.'<br>';
    }
  }

  public function store($data){
    array_push($this->animal, $data);
  }

  public function update($index, $data){
    $this->animal[$index] = $data;
  }

  public function destroy($index){
    unset($this->animal[$index]);
  }
}

$animal = new Animal(['Ayam', 'Ikan']);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store('burung');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Kucing Anggora');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";

?>