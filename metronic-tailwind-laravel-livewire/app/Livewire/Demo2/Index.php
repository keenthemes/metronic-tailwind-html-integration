<?php

namespace App\Livewire\Demo2;

use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        return view('livewire.demo2.index')
            ->layout('layouts.demo2.base');
    }
}
