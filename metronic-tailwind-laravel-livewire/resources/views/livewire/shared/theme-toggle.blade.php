<div>
    <!-- Theme Mode -->
    <script data-navigate-once>
        (function() {
            if (!window.defaultThemeMode) {
                window.defaultThemeMode = 'light'; // light|dark|system
            }
            let themeMode;

            if (document.documentElement) {
                if (localStorage.getItem('kt-theme')) {
                    themeMode = localStorage.getItem('kt-theme');
                } else if (
                    document.documentElement.hasAttribute('data-kt-theme-mode')
                ) {
                    themeMode =
                        document.documentElement.getAttribute('data-kt-theme-mode');
                } else {
                    themeMode = window.defaultThemeMode;
                }

                if (themeMode === 'system') {
                    themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ?
                        'dark' :
                        'light';
                }

                document.documentElement.classList.add(themeMode);
            }
        })();
    </script>
    <!-- Sidebar collapse: restore kt-sidebar-collapse before paint (pairs with app.js persistence key kt-sidebar-collapsed) -->
    <script data-navigate-once>
        (function() {
            if (document.body && localStorage.getItem('kt-sidebar-collapsed') === '1') {
                document.body.classList.add('kt-sidebar-collapse');
            }
        })();
    </script>
    <!-- End of Theme Mode -->
</div>
