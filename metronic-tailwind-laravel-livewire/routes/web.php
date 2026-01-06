<?php

use Illuminate\Support\Facades\Route;
use App\Livewire\Demo1\Index as Demo1Index;
use App\Livewire\Demo1\Profile as Demo1Profile;
use App\Livewire\Demo1\Settings as Demo1Settings;
use App\Livewire\Demo1\Users as Demo1Users;
use App\Livewire\Demo2\Index as Demo2Index;
use App\Livewire\Demo2\Profile as Demo2Profile;
use App\Livewire\Demo2\Settings as Demo2Settings;
use App\Livewire\Demo2\Users as Demo2Users;
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
Route::get('/demo1/profile', Demo1Profile::class)->name('demo1.profile');
Route::get('/demo1/settings', Demo1Settings::class)->name('demo1.settings');
Route::get('/demo1/users', Demo1Users::class)->name('demo1.users');

// Demo2 routes
Route::get('/demo2', Demo2Index::class)->name('demo2.index');
Route::get('/demo2/profile', Demo2Profile::class)->name('demo2.profile');
Route::get('/demo2/settings', Demo2Settings::class)->name('demo2.settings');
Route::get('/demo2/users', Demo2Users::class)->name('demo2.users');

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
