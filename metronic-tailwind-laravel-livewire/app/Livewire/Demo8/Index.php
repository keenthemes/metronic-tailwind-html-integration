<?php

namespace App\Livewire\Demo8;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo8.base')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.demo8.index');
    }
}
