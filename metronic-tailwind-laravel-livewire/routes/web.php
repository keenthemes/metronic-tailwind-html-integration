<?php

use Illuminate\Support\Facades\Route;
use App\Livewire\Demo1\Index as Demo1Index;
use App\Livewire\Demo2\Index as Demo2Index;
use App\Livewire\Demo3\Index as Demo3Index;
use App\Livewire\Demo4\Index as Demo4Index;
use App\Livewire\Demo5\Index as Demo5Index;
use App\Livewire\Demo6\Index as Demo6Index;
use App\Livewire\Demo7\Index as Demo7Index;
use App\Livewire\Demo8\Index as Demo8Index;
use App\Livewire\Demo9\Index as Demo9Index;
use App\Livewire\Demo10\Index as Demo10Index;

Route::get('/', function () {
    return redirect()->route('demo1.index');
});

// Demo1 routes
Route::get('/demo1', Demo1Index::class)->name('demo1.index');

// Demo2 routes
Route::get('/demo2', Demo2Index::class)->name('demo2.index');

// Demo3 routes
Route::get('/demo3', Demo3Index::class)->name('demo3.index');

// Demo4 routes
Route::get('/demo4', Demo4Index::class)->name('demo4.index');

// Demo5 routes
Route::get('/demo5', Demo5Index::class)->name('demo5.index');

// Demo6 routes
Route::get('/demo6', Demo6Index::class)->name('demo6.index');

// Demo7 routes
Route::get('/demo7', Demo7Index::class)->name('demo7.index');

// Demo8 routes
Route::get('/demo8', Demo8Index::class)->name('demo8.index');

// Demo9 routes
Route::get('/demo9', Demo9Index::class)->name('demo9.index');

// Demo10 routes
Route::get('/demo10', Demo10Index::class)->name('demo10.index');
