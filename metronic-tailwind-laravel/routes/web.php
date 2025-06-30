<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo1Controller;
use App\Http\Controllers\Demo2Controller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Demo1 routes
Route::get('/demo1', function () {
    return view('pages.demo1.index');
});

// Demo2 routes
Route::get('/demo2', function () {
    return view('pages.demo2.index');
});

// Demo3 routes
Route::get('/demo3', function () {
    return view('pages.demo3.index');
});

// Demo4 routes
Route::get('/demo4', function () {
    return view('pages.demo4.index');
});

// Demo5 routes
Route::get('/demo5', function () {
    return view('pages.demo5.index');
});
