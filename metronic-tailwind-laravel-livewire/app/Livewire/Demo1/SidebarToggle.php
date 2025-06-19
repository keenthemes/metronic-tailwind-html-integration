<?php

namespace App\Livewire\Demo1;

use Livewire\Component;

class SidebarToggle extends Component
{
    public $sidebarVisible = true;

    public function toggleSidebar()
    {
        $this->sidebarVisible = !$this->sidebarVisible;
        $this->dispatch('sidebar-toggled', sidebarVisible: $this->sidebarVisible);
    }

    public function render()
    {
        return view('livewire.demo1.sidebar-toggle');
    }
}