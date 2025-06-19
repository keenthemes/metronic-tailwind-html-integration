<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{{ csrf_token() }}">

<title>{{ $title ?? 'Metronic Laravel Livewire' }}</title>

<!-- Favicon -->
<link rel="icon" type="image/png" href="{{ asset('media/misc/favicon.ico') }}">

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Styles -->
@vite(['resources/css/app.css'])

<!-- Custom CSS Variables -->
<style>
:root {
  --tw-color-background: 255 255 255;
  --tw-color-foreground: 71 85 105;
  --tw-color-muted-foreground: 148 163 184;
  --tw-color-secondary-foreground: 100 116 139;
  --tw-color-border: 226 232 240;
  --tw-color-mono: 15 23 42;
}

.dark {
  --tw-color-background: 15 23 42;
  --tw-color-foreground: 226 232 240;
  --tw-color-muted-foreground: 148 163 184;
  --tw-color-secondary-foreground: 203 213 225;
  --tw-color-border: 51 65 85;
  --tw-color-mono: 241 245 249;
}
</style>

@livewireStyles