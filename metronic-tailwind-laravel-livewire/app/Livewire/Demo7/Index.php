<?php

namespace App\Livewire\Demo7;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo7.base')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.demo7.index');
    }
}
