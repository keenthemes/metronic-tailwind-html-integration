<div class="kt-menu" data-kt-menu="true">
    <div class="kt-menu-item" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
        <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-light">
            <i class="ki-filled ki-magnifier text-base"></i>
        </button>
        <div class="kt-menu-dropdown w-screen max-w-[600px]">
            <div class="kt-menu-section">
                <div class="flex items-center gap-2.5 px-5 py-2.5">
                    <i class="ki-filled ki-magnifier text-base text-gray-500"></i>
                    <input
                        class="flex-1 border-0 bg-transparent text-sm font-medium text-gray-700 placeholder:text-gray-500 focus:outline-none"
                        placeholder="Search..."
                        type="text"
                        wire:model.live.debounce.300ms="searchQuery"
                        wire:keydown.enter="performSearch"
                    >
                    <div class="flex items-center gap-1.5">
                        <span class="text-xs text-gray-500 font-medium">Press</span>
                        <kbd class="kt-badge kt-badge-xs kt-badge-light">Enter</kbd>
                        <span class="text-xs text-gray-500 font-medium">to search</span>
                    </div>
                </div>
            </div>

            @if(!empty($searchQuery))
                <div class="kt-menu-separator"></div>

                <div class="kt-menu-section">
                    <div class="flex items-center justify-between px-5 py-2.5">
                        <h4 class="text-xs text-gray-600 font-medium uppercase tracking-wide">
                            Search Results
                        </h4>
                        <span class="text-xs text-gray-500">
                            {{ count($searchResults) }} results
                        </span>
                    </div>
                </div>

                @if(count($searchResults) > 0)
                    @foreach($searchResults as $result)
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="{{ $result['url'] ?? '#' }}" wire:navigate>
                                <span class="kt-menu-icon">
                                    <i class="ki-filled {{ $result['icon'] ?? 'ki-file' }}"></i>
                                </span>
                                <div class="flex flex-col gap-0.5">
                                    <span class="kt-menu-title">{{ $result['title'] ?? 'No title' }}</span>
                                    <span class="text-xs text-gray-500">{{ $result['description'] ?? '' }}</span>
                                </div>
                            </a>
                        </div>
                    @endforeach
                @else
                    <div class="kt-menu-item">
                        <div class="kt-menu-link">
                            <span class="kt-menu-icon">
                                <i class="ki-filled ki-information text-gray-400"></i>
                            </span>
                            <span class="kt-menu-title text-gray-500">No results found</span>
                        </div>
                    </div>
                @endif
            @else
                <div class="kt-menu-section">
                    <div class="px-5 py-2.5">
                        <h4 class="text-xs text-gray-600 font-medium uppercase tracking-wide mb-2.5">
                            Recent Searches
                        </h4>
                        <div class="flex flex-col gap-1">
                            @foreach($recentSearches ?? [] as $recent)
                                <button
                                    class="flex items-center gap-2.5 px-2.5 py-1.5 text-left text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                                    wire:click="setSearchQuery('{{ $recent }}')"
                                >
                                    <i class="ki-filled ki-clock text-xs text-gray-400"></i>
                                    {{ $recent }}
                                </button>
                            @endforeach
                        </div>
                    </div>
                </div>
            @endif

            <div class="kt-menu-separator"></div>

            <div class="kt-menu-section">
                <div class="flex items-center justify-between px-5 py-2.5">
                    <div class="flex items-center gap-1.5">
                        <i class="ki-filled ki-keyboard text-xs text-gray-500"></i>
                        <span class="text-xs text-gray-500 font-medium">Shortcuts</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <kbd class="kt-badge kt-badge-xs kt-badge-light">Ctrl</kbd>
                        <span class="text-xs text-gray-500">+</span>
                        <kbd class="kt-badge kt-badge-xs kt-badge-light">K</kbd>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>