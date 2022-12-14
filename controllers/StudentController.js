const { json } = require("body-parser");
const student = require("../data/student");

// TODO 3: Import data students dari folder data/students.js
const express = "../data/student";

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    const data = {
      message: "Menampilkkan semua data students",
      data: [student],
    };

    res.json(data);
  }

  store(req, res) {
    const body = req.body;
    const maxId = student.reduce(
      (acc, curr) => (curr.id >= acc ? curr.id : acc),
      0
    );

    // TODO 5: Tambahkan data students
    const newId = maxId + 1;
    const newStudent = { id: newId, ...body };
    student.push(newStudent);
    const data = {
      message: `Menambahkan ${newStudent.first_name} ${newStudent.last_name} ke dalam data student`,
      data: [newStudent],
    };

    res.send(data);
  }

  update(req, res) {
    const id = +req.params.id;
    const body = req.body;
    const index = student.findIndex((st) => st.id === id);

    // TODO 6: Update data students
    if (index >= 0) {
      const updateStudent = { id: id, ...body };
      student[index] = updateStudent;
      const data = {
        message: `Mengedit student id ${updateStudent.id}, nama ${updateStudent.first_name}`,
        data: [updateStudent],
      };
      res.send(data);
    } else res.status(404).send("No student found");
  }

  destroy(req, res) {
    const id = +req.params.id;
    const index = student.findIndex((st) => st.id === id);

    // TODO 7: Hapus data students
    if (index >= 0) {
      const deleteStudent = student.splice(index, 1);
      const data = {
        message: `Menghapus student id ${id}`,
        data: [deleteStudent],
      };
      res.json(data);
    } else res.status(404).send("No student found");
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
