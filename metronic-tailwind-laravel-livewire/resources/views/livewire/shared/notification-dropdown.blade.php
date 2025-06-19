<div class="kt-menu" data-kt-menu="true">
    <div class="kt-menu-item" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
        <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-light position-relative">
            <i class="ki-filled ki-notification-bing text-base"></i>
            @if($unreadCount > 0)
                <span class="kt-badge kt-badge-xs kt-badge-circle kt-badge-danger position-absolute top-0 start-100 translate-middle">
                    {{ $unreadCount > 99 ? '99+' : $unreadCount }}
                </span>
            @endif
        </button>
        <div class="kt-menu-dropdown w-screen max-w-[400px]">
            <div class="kt-menu-section flex items-center justify-between px-5 py-2.5 border-b border-border">
                <h4 class="text-sm text-gray-800 font-semibold">
                    Notifications
                </h4>
                <div class="flex items-center gap-1.5">
                    @if($unreadCount > 0)
                        <span class="kt-badge kt-badge-xs kt-badge-primary">
                            {{ $unreadCount }} new
                        </span>
                    @endif
                    <button
                        class="text-xs text-gray-500 hover:text-primary font-medium"
                        wire:click="markAllAsRead"
                        title="Mark all as read"
                    >
                        Mark all read
                    </button>
                </div>
            </div>

            <div class="max-h-[400px] overflow-y-auto">
                @if(count($notifications) > 0)
                    @foreach($notifications as $notification)
                        <div class="kt-menu-item {{ !$notification['read'] ? 'bg-gray-50' : '' }}">
                            <div class="kt-menu-link px-5 py-3">
                                <div class="flex items-start gap-3.5">
                                    <div class="flex items-center justify-center size-8 rounded-full {{ $notification['type'] === 'success' ? 'bg-success/10 text-success' : ($notification['type'] === 'warning' ? 'bg-warning/10 text-warning' : 'bg-primary/10 text-primary') }}">
                                        <i class="ki-filled {{ $notification['icon'] ?? 'ki-notification-bing' }} text-sm"></i>
                                    </div>
                                    <div class="flex flex-col gap-1 flex-1 min-w-0">
                                        <div class="flex items-start justify-between gap-1">
                                            <div class="text-sm text-gray-800 font-medium leading-tight">
                                                {{ $notification['title'] ?? 'Notification' }}
                                            </div>
                                            @if(!$notification['read'])
                                                <span class="kt-badge kt-badge-dot kt-badge-xs kt-badge-primary flex-shrink-0"></span>
                                            @endif
                                        </div>
                                        <div class="text-xs text-gray-600 leading-relaxed">
                                            {{ $notification['message'] ?? '' }}
                                        </div>
                                        <div class="flex items-center justify-between gap-2 mt-1">
                                            <span class="text-xs text-gray-500">
                                                {{ $notification['time'] ?? '' }}
                                            </span>
                                            <div class="flex items-center gap-1">
                                                @if(!$notification['read'])
                                                    <button
                                                        class="text-xs text-primary hover:underline"
                                                        wire:click="markAsRead({{ $notification['id'] }})"
                                                    >
                                                        Mark read
                                                    </button>
                                                @endif
                                                <button
                                                    class="text-xs text-gray-500 hover:text-danger"
                                                    wire:click="deleteNotification({{ $notification['id'] }})"
                                                    title="Delete notification"
                                                >
                                                    <i class="ki-filled ki-trash text-xs"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    <div class="kt-menu-item">
                        <div class="kt-menu-link px-5 py-8 text-center">
                            <div class="flex flex-col items-center gap-2.5">
                                <i class="ki-filled ki-notification-off text-2xl text-gray-400"></i>
                                <div class="text-sm text-gray-600 font-medium">
                                    No notifications
                                </div>
                                <div class="text-xs text-gray-500">
                                    You're all caught up!
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            </div>

            @if(count($notifications) > 0)
                <div class="kt-menu-separator"></div>
                <div class="kt-menu-section px-5 py-2.5 text-center">
                    <a
                        class="text-sm text-primary hover:underline font-medium"
                        href="#"
                        wire:navigate
                    >
                        View all notifications
                    </a>
                </div>
            @endif
        </div>
    </div>
</div>