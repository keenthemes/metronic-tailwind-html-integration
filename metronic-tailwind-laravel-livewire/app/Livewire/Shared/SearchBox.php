<?php

namespace App\Livewire\Shared;

use Livewire\Component;

class SearchBox extends Component
{
    public $query = '';
    public $results = [];
    public $showResults = false;

    public function updatedQuery()
    {
        if (strlen($this->query) > 2) {
            $this->search();
        } else {
            $this->results = [];
            $this->showResults = false;
        }
    }

    private function search()
    {
        // Simulate search results
        $mockResults = [
            ['title' => 'Dashboard', 'url' => '/demo1', 'type' => 'page'],
            ['title' => 'User Profile', 'url' => '/profile', 'type' => 'page'],
            ['title' => 'Settings', 'url' => '/settings', 'type' => 'page'],
            ['title' => 'Analytics', 'url' => '/analytics', 'type' => 'page'],
        ];

        $this->results = collect($mockResults)
            ->filter(fn($item) => stripos($item['title'], $this->query) !== false)
            ->take(5)
            ->toArray();

        $this->showResults = !empty($this->results);
    }

    public function selectResult($url)
    {
        $this->query = '';
        $this->results = [];
        $this->showResults = false;
        return redirect($url);
    }

    public function render()
    {
        return view('livewire.shared.search-box');
    }
}