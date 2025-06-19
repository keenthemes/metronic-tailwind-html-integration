<div class="balance-widget">
    <h3>Account Balance</h3>
    <p class="balance-amount">${{ number_format($balance, 2) }}</p>
    <div class="balance-actions">
        <button wire:click="addFunds" class="btn btn-primary">Add Funds</button>
        <button wire:click="withdraw" class="btn btn-secondary">Withdraw</button>
    </div>
</div>