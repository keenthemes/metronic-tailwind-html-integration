<?php

namespace App\Livewire\Demo4;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo4.base')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.demo4.index');
    }
}
