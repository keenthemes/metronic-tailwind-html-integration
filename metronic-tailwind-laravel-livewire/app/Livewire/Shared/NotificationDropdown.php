<?php

namespace App\Livewire\Shared;

use Livewire\Component;

class NotificationDropdown extends Component
{
    public $notifications = [];
    public $unreadCount = 0;
    public $showDropdown = false;

    public function mount()
    {
        $this->loadNotifications();
    }

    private function loadNotifications()
    {
        // Simulate notifications
        $this->notifications = [
            [
                'id' => 1,
                'title' => 'New message received',
                'message' => 'You have a new message from John Doe',
                'time' => '2 minutes ago',
                'read' => false,
                'type' => 'message'
            ],
            [
                'id' => 2,
                'title' => 'System update',
                'message' => 'System maintenance scheduled for tonight',
                'time' => '1 hour ago',
                'read' => false,
                'type' => 'system'
            ],
            [
                'id' => 3,
                'title' => 'Task completed',
                'message' => 'Your report has been generated successfully',
                'time' => '3 hours ago',
                'read' => true,
                'type' => 'success'
            ]
        ];

        $this->unreadCount = collect($this->notifications)->where('read', false)->count();
    }

    public function toggleDropdown()
    {
        $this->showDropdown = !$this->showDropdown;
    }

    public function markAsRead($notificationId)
    {
        $this->notifications = collect($this->notifications)->map(function ($notification) use ($notificationId) {
            if ($notification['id'] == $notificationId) {
                $notification['read'] = true;
            }
            return $notification;
        })->toArray();

        $this->unreadCount = collect($this->notifications)->where('read', false)->count();
    }

    public function markAllAsRead()
    {
        $this->notifications = collect($this->notifications)->map(function ($notification) {
            $notification['read'] = true;
            return $notification;
        })->toArray();

        $this->unreadCount = 0;
    }

    public function render()
    {
        return view('livewire.shared.notification-dropdown');
    }
}