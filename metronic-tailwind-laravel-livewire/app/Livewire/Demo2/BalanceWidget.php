<?php

namespace App\Livewire\Demo2;

use Livewire\Component;

class BalanceWidget extends Component
{
    public $balance = 9395.72;
    public $selectedPeriod = 'month';
    public $periods = ['today', 'week', 'month', 'year'];

    public function setPeriod($period)
    {
        $this->selectedPeriod = $period;
        $this->updateBalance();
    }

    private function updateBalance()
    {
        // Simulate different balance values for different periods
        $balances = [
            'today' => 1245.30,
            'week' => 3567.45,
            'month' => 9395.72,
            'year' => 45782.90
        ];

        $this->balance = $balances[$this->selectedPeriod] ?? 9395.72;
    }

    public function render()
    {
        return view('livewire.demo2.balance-widget');
    }
}