<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Demo2Controller extends Controller
{
    /**
     * Display the demo2 dashboard page.
     */
    public function index()
    {
        return view('demo2.index');
    }
}