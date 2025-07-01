<?php

namespace App\Livewire\Demo6;

use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.demo6.base')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.demo6.index');
    }
}
