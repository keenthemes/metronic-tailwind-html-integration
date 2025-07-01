<?php

namespace App\Livewire\Demo10;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo10.base')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.demo10.index');
    }
}
