<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller {

    // Method index - Get all resources
    public function index() {
        // menggunakan model Student untuk select data
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        // menggunakan response json laravel
        // otomatis set header content type json
        // otomatis mengubah data array ke JSON
        // mengatur status code
        return response()->json($data, 200);
    }

    public function store(Request $request) {
        // menangkap data request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        // menggunakan Student untuk insert data
        $student = Student::create($input);

        $data = [
            'message' => 'Student is created successfully',
            'data' => $student,
        ];

        // mengembalikan data (json) status code 201
        return response()->json($data, 201);
    }

    public function update(Request $request, $id) {
        // menangkap data request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        // menggunakan Student untuk menemukan id dan update data
        $student = Student::find($id);

        if($student) {
            $student->update($input);
            
            $data = [
                'message' => 'Student updated successfully',
                'data' => $student,
            ];
    
            // mengembalikan data (json) status code 200
            return response()->json($data, 200);
        }
        else {
            // mengembalikan data (json) status code 404
            return response()->json(['message' => 'No student found'], 404);
        }
    }

    public function destroy($id) {

        // menggunakan Student untuk menemukan id dan delete data
        $student = Student::find($id);

        if($student) {
            $student->delete();
            
            $data = [
                'message' => 'Student deleted successfully',
                'data' => $student,
            ];
    
            // mengembalikan data (json) status code 200
            return response()->json($data, 200);
        }
        else {
            // mengembalikan data (json) status code 404
            return response()->json(['message' => 'No student found'], 404);
        }

    }
}
