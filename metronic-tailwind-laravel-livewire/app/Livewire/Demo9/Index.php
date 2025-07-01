<?php

namespace App\Livewire\Demo9;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo9.base')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.demo9.index');
    }
}
