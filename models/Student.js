//import database
const db = require("../config/database");

//membuat class Model Student
class Student {
  // membuat method static all
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      //query
      const sql = `SELECT * FROM students WHERE id = ${id}`;
      db.query(sql, (error, results) => {
        resolve(results);
      });
    });
  }

  static create(data) {
    // code here
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO students SET ?`;
      db.query(sql, data, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(this.find(results.insertId));
        }
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = `UPDATE students SET ? WHERE id = ?`;
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    //mencari data yang baru diupdate
    const student = await this.find(id);
    return student;
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM students WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

//export class student
module.exports = Student;
