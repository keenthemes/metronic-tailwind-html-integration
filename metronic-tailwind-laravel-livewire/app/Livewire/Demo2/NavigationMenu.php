<?php

namespace App\Livewire\Demo2;

use Livewire\Component;

class NavigationMenu extends Component
{
    public $activeMenu = '';
    public $showMobileMenu = false;

    public function mount($activeMenu = '')
    {
        $this->activeMenu = $activeMenu;
    }

    public function toggleMobileMenu()
    {
        $this->showMobileMenu = !$this->showMobileMenu;
    }

    public function setActiveMenu($menu)
    {
        $this->activeMenu = $menu;
        $this->showMobileMenu = false;
    }

    public function render()
    {
        return view('livewire.demo2.navigation-menu');
    }
}