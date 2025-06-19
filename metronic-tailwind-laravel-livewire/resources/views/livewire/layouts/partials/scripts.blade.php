<!-- Scripts -->
@vite(['resources/js/app.js'])

@livewireScripts

<!-- Metronic Core JS -->
<script>
// Initialize theme mode based on session/localStorage
document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = '{{ session("theme", "light") }}';
    document.documentElement.setAttribute('data-kt-theme-mode', currentTheme);

    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Listen for theme changes from Livewire
document.addEventListener('livewire:init', () => {
    Livewire.on('theme-changed', (event) => {
        document.documentElement.setAttribute('data-kt-theme-mode', event.theme);

        if (event.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
});
</script>