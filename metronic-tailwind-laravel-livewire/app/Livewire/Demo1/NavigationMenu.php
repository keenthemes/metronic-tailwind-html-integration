<?php

namespace App\Livewire\Demo1;

use Livewire\Component;

class NavigationMenu extends Component
{
    public $activeMenu = '';
    public $showMegaMenu = false;

    public function mount($activeMenu = '')
    {
        $this->activeMenu = $activeMenu;
    }

    public function toggleMegaMenu()
    {
        $this->showMegaMenu = !$this->showMegaMenu;
    }

    public function setActiveMenu($menu)
    {
        $this->activeMenu = $menu;
    }

    public function render()
    {
        return view('livewire.demo1.navigation-menu');
    }
}