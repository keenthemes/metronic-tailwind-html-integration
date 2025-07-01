<?php

namespace App\Livewire\Demo3;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo3.base')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.demo3.index');
    }
}
