<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo1Controller;
use App\Http\Controllers\Demo2Controller;

Route::get('/', function () {
    return redirect()->route('demo1.index');
});

// Demo1 routes
Route::get('/demo1', [Demo1Controller::class, 'index'])->name('demo1.index');

// Demo2 routes
Route::get('/demo2', [Demo2Controller::class, 'index'])->name('demo2.index');
