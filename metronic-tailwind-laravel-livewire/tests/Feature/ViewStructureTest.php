<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\File;

class ViewStructureTest extends TestCase
{
    /**
     * Test that all HTML files have been converted to Blade templates
     */
    public function test_no_html_files_in_views_directory()
    {
        $viewsPath = resource_path('views');
        $htmlFiles = File::glob($viewsPath . '/**/*.html');

        $this->assertEmpty($htmlFiles, 'HTML files still exist in views directory: ' . implode(', ', $htmlFiles));
    }

    /**
     * Test that all expected Blade templates exist
     */
    public function test_blade_templates_exist()
    {
        $expectedTemplates = [
            // Demo1 templates
            'demo1.index',
            'layouts.demo1.base',
            'layouts.demo1.partials.header',
            'layouts.demo1.partials.sidebar',
            'layouts.demo1.partials.footer',
            'layouts.demo1.partials.mega-menu',

            // Demo2 templates
            'demo2.index',
            'layouts.demo2.base',
            'layouts.demo2.partials.header',
            'layouts.demo2.partials.footer',

            // Shared layouts
            'layouts.partials.head',
            'layouts.partials.scripts',
            'layouts.partials.theme-mode',

            // Livewire components
            'livewire.demo1.base',
            'livewire.demo1.index',
            'livewire.demo1.navigation-menu',
            'livewire.demo1.sidebar-toggle',
            'livewire.demo1.user-dropdown',

            // Shared Livewire components
            'livewire.shared.notification-dropdown',
            'livewire.shared.search-box',
            'livewire.shared.theme-mode',
        ];

        foreach ($expectedTemplates as $template) {
            $this->assertTrue(
                View::exists($template),
                "Template '{$template}' does not exist"
            );
        }
    }

    /**
     * Test that demo1 index page can be rendered
     */
    public function test_demo1_index_renders()
    {
        $response = $this->get('/demo1');
        $response->assertStatus(200);
        $response->assertViewIs('demo1.index');
    }

    /**
     * Test that demo2 index page can be rendered
     */
    public function test_demo2_index_renders()
    {
        $response = $this->get('/demo2');
        $response->assertStatus(200);
        $response->assertViewIs('demo2.index');
    }

    /**
     * Test view structure follows Laravel conventions
     */
    public function test_view_directory_structure()
    {
        $expectedDirectories = [
            'resources/views/demo1',
            'resources/views/demo2',
            'resources/views/layouts',
            'resources/views/layouts/demo1',
            'resources/views/layouts/demo2',
            'resources/views/layouts/partials',
            'resources/views/layouts/demo1/partials',
            'resources/views/layouts/demo2/partials',
            'resources/views/livewire',
            'resources/views/livewire/demo1',
            'resources/views/livewire/demo2',
            'resources/views/livewire/shared',
        ];

        foreach ($expectedDirectories as $directory) {
            $this->assertTrue(
                File::isDirectory(base_path($directory)),
                "Directory '{$directory}' does not exist"
            );
        }
    }

    /**
     * Test that Blade templates use correct syntax
     */
    public function test_blade_templates_use_correct_syntax()
    {
        $viewsPath = resource_path('views');
        $bladeFiles = File::glob($viewsPath . '/**/*.blade.php');

        foreach ($bladeFiles as $bladeFile) {
            $content = File::get($bladeFile);

            // Check for old Jinja syntax that should have been converted
            $this->assertStringNotContainsString('{% extends', $content,
                "File {$bladeFile} contains unconverted Jinja extends syntax");
            $this->assertStringNotContainsString('{% block', $content,
                "File {$bladeFile} contains unconverted Jinja block syntax");
            $this->assertStringNotContainsString('{% include', $content,
                "File {$bladeFile} contains unconverted Jinja include syntax");
            $this->assertStringNotContainsString('{% endblock', $content,
                "File {$bladeFile} contains unconverted Jinja endblock syntax");

            // Check for proper Blade syntax if extends/sections are used
            if (str_contains($content, '@extends')) {
                $this->assertMatchesRegularExpression('/@extends\([\'"]([^\'"]+)[\'"]\)/', $content,
                    "File {$bladeFile} has malformed @extends syntax");
            }

            if (str_contains($content, '@section')) {
                $this->assertMatchesRegularExpression('/@section\([\'"]([^\'"]+)[\'"]\)/', $content,
                    "File {$bladeFile} has malformed @section syntax");
            }
        }
    }

    /**
     * Test that asset paths use Laravel helpers
     */
    public function test_asset_paths_use_laravel_helpers()
    {
        $viewsPath = resource_path('views');
        $bladeFiles = File::glob($viewsPath . '/**/*.blade.php');

        foreach ($bladeFiles as $bladeFile) {
            $content = File::get($bladeFile);

            // Skip files that don't have asset references
            if (!str_contains($content, 'assets/')) {
                continue;
            }

            // Check that asset paths use Laravel asset() helper
            if (preg_match('/src="assets\//', $content)) {
                $this->assertStringContainsString('{{ asset(', $content,
                    "File {$bladeFile} contains unconverted asset paths in src attributes");
            }

            if (preg_match('/href="assets\//', $content)) {
                $this->assertStringContainsString('{{ asset(', $content,
                    "File {$bladeFile} contains unconverted asset paths in href attributes");
            }
        }
    }

    /**
     * Test that routes exist for demo pages
     */
    public function test_demo_routes_exist()
    {
        $response = $this->get('/demo1');
        $response->assertStatus(200);

        $response = $this->get('/demo2');
        $response->assertStatus(200);
    }

    /**
     * Test that Livewire components can be rendered
     */
    public function test_livewire_components_can_be_rendered()
    {
        $livewireComponents = [
            'demo1.navigation-menu',
            'demo1.sidebar-toggle',
            'demo1.user-dropdown',
            'shared.notification-dropdown',
            'shared.search-box',
            'shared.theme-mode',
        ];

        foreach ($livewireComponents as $component) {
            try {
                $view = View::make("livewire.{$component}");
                $this->assertNotNull($view, "Livewire component view '{$component}' cannot be rendered");
            } catch (\Exception $e) {
                $this->fail("Livewire component view '{$component}' threw exception: " . $e->getMessage());
            }
        }
    }
}