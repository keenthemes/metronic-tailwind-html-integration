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
     * Test that demo routes exist and return 200
     */
    public function test_demo_routes_exist()
    {
        $response = $this->get('/demo1');
        $response->assertStatus(200);

        $response = $this->get('/demo2');
        $response->assertStatus(200);
    }

    /**
     * Test that Livewire shared topbar components can be rendered
     */
    public function test_livewire_topbar_components_can_be_rendered()
    {
        $livewireComponents = [
            'shared.topbar-search-modal',
            'shared.topbar-notification-dropdown',
            'shared.topbar-chat',
            'shared.topbar-apps',
            'shared.topbar-user-dropdown',
            'shared.mega-menu',
            'shared.logo',
            'shared.theme-toggle',
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
}