<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Demo1Controller extends Controller
{
    public function index()
    {
        return view('pages.demo1.index');
    }
}