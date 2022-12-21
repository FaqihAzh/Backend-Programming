//import database
const db = require("../config/database");

//membuat class Model Student
class Student {
  // membuat method static all
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static show(id) {
    const promise = new Promise((resolve, reject) => {
      //query
      const sql = `SELECT & FROM students WHERE id = ${id}`;
      db.query(sql, (error, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create(data) {
    // code here
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(this.show(results.insertId));
        }
      });
    });
  }
}

//export class student
module.exports = Student;
