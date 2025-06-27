<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Demo2Controller extends Controller
{
    public function index()
    {
        return view('pages.demo2.index');
    }
}