<?php

namespace App\Livewire\Demo1;

use Livewire\Component;

class UserDropdown extends Component
{
    public $showDropdown = false;
    public $user;
    public $isDarkMode = false;

    public function mount()
    {
        $this->user = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'avatar' => '/media/avatars/300-1.png'
        ];
        $this->isDarkMode = session('theme', 'light') === 'dark';
    }

    public function toggleDropdown()
    {
        $this->showDropdown = !$this->showDropdown;
    }

    public function toggleDarkMode()
    {
        $this->isDarkMode = !$this->isDarkMode;
        $theme = $this->isDarkMode ? 'dark' : 'light';
        session(['theme' => $theme]);
        $this->dispatch('theme-changed', theme: $theme);
    }

    public function logout()
    {
        // Handle logout logic
        session()->flash('message', 'Logged out successfully');
        $this->showDropdown = false;
    }

    public function render()
    {
        return view('livewire.demo1.user-dropdown');
    }
}