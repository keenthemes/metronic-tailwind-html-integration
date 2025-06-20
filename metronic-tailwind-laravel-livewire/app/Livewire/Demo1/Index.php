<?php

namespace App\Livewire\Demo1;

use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        return view('livewire.demo1.index')
            ->layout('layouts.demo1.base');
    }
}
