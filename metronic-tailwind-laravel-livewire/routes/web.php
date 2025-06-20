<?php

use Illuminate\Support\Facades\Route;
use App\Livewire\Demo1\Index as Demo1Index;
use App\Livewire\Demo2\Index as Demo2Index;

Route::get('/', function () {
    return redirect()->route('demo1.index');
});

// Demo1 routes
Route::get('/demo1', Demo1Index::class)->name('demo1.index');

// Demo2 routes
Route::get('/demo2', Demo2Index::class)->name('demo2.index');
