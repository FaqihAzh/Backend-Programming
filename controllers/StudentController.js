//import Model Student
const Student = require("../models/Student");

//membuat class StudentController
class StudentController {
  async index(req, res) {
    //memanggil method static all
    const students = await Student.all();

    //data array lebih dari 0
    if (students.length > 0) {
      const data = {
        message: "Menampilkan semua students",
        data: students,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: "Students is empty",
      };

      res.status(200).json(data);
    }
  }

  async store(req, res) {
    // validasi sederhana

    const { nama, nim, email, jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "semua data harus dikirim",
      };
      res.status(422).json(data);
    }

    //else
    const student = await Student.create(req.body);

    const data = {
      message: "menambahkan data students",
      data: student,
    };

    res.status(201).json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    //cari id student yang ingin diupdate
    const student = await Student.find(id);

    if (student) {
      //melakukan update data
      const student = await Student.update(id, req.body);
      const data = {
        message: `mengedit data student`,
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      //melakukan hapus data
      await Student.delete(id);
      const data = {
        message: `menghapus data student`,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };
      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    //cari student berdasarkan id
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `menampilkan detail student`,
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };
      res.status(404).json(data);
    }
  }
}

//membuat objec StudentController
const object = new StudentController();

//export object studentcontroller
module.exports = object;
