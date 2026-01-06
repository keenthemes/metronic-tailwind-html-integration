<?php

namespace App\Livewire\Demo1;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo1.base')]
class Profile extends Component
{
    public function render()
    {
        return view('livewire.demo1.profile');
    }
}
