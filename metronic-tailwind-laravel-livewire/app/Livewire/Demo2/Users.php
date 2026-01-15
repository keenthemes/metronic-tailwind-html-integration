<?php

namespace App\Livewire\Demo2;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo2.base')]
class Users extends Component
{
    public function render()
    {
        return view('livewire.demo2.users');
    }
}
