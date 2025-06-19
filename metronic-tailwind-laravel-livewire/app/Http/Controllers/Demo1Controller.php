<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Demo1Controller extends Controller
{
    /**
     * Display the demo1 dashboard page.
     */
    public function index()
    {
        return view('demo1.index');
    }
}