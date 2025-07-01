<?php

namespace App\Livewire\Demo5;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo5.base')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.demo5.index');
    }
}
