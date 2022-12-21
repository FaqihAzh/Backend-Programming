//import Model Student
const Student = require("../models/Student");

//membuat class StudentController
class StudentController {
  async index(req, res) {
    //memanggil method static all
    const students = await Student.all();

    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.status(200).json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    const students = await Student.create(req.body);

    const data = {
      message: "menambah data student",
      data: students,
    };

    res.status(201).json(data, this.index);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    //TODO 6: update data student
    //code here
    students[id] = nama;

    const data = {
      message: `Mengupdate student dengan id ${id} nama ${nama}`,
      data: students,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    //TODO 7: hapus data student
    //code here
    students.splice(id, 1);
    const data = {
      message: `Menghapus student dengan id ${id}`,
      data: students,
    };

    res.json(data);
  }
}

//membuat objec StudentController
const object = new StudentController();

//export object studentcontroller
module.exports = object;
