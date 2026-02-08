{{-- Global drawer elements so they exist after wire:navigate --}}
<div class="kt-drawer kt-drawer-end card bottom-5 end-5 top-5 hidden w-[450px] max-w-[90%] flex-col rounded-xl border border-border"
    data-kt-drawer="true" data-kt-drawer-container="body" id="notifications_drawer">
    @include('livewire.shared.partials.notifications-drawer-content')
</div>
<div class="kt-drawer kt-drawer-end card bottom-5 end-5 top-5 hidden w-[450px] max-w-[90%] flex-col rounded-xl border border-border"
    data-kt-drawer="true" data-kt-drawer-container="body" id="chat_drawer">
    @include('livewire.shared.partials.chat-drawer-content')
</div>
