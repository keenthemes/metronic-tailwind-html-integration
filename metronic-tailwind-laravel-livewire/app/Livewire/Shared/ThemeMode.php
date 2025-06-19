<?php

namespace App\Livewire\Shared;

use Livewire\Component;

class ThemeMode extends Component
{
    public $currentTheme = 'light';

    public function mount()
    {
        $this->currentTheme = session('theme', 'light');
    }

    public function toggleTheme()
    {
        $this->currentTheme = $this->currentTheme === 'light' ? 'dark' : 'light';
        session(['theme' => $this->currentTheme]);
        $this->dispatch('theme-changed', theme: $this->currentTheme);
    }

    public function setTheme($theme)
    {
        $this->currentTheme = $theme;
        session(['theme' => $this->currentTheme]);
        $this->dispatch('theme-changed', theme: $this->currentTheme);
    }

    public function render()
    {
        return view('livewire.shared.theme-mode');
    }
}