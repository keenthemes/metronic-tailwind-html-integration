{{-- Theme Mode Component --}}
@livewire('shared.theme-mode')

{{-- Theme Mode Script --}}
<script>
// Set initial theme mode from session or default to light
(function() {
    'use strict';

    let defaultThemeMode = 'light';
    let themeMode;

    if (document.documentElement.hasAttribute('data-kt-theme-mode')) {
        themeMode = document.documentElement.getAttribute('data-kt-theme-mode');
    } else {
        themeMode = '{{ session("theme", "light") }}';
    }

    if (themeMode === 'system') {
        themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-kt-theme-mode', themeMode);

    if (themeMode === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();
</script>