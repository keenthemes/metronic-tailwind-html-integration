<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DemoSmokeTest extends TestCase
{
    /**
     * Test that all demo pages load successfully
     *
     * @return void
     */
    public function test_all_demo_pages_load_successfully()
    {
        $demos = [
            'demo1' => '/demo1',
            'demo2' => '/demo2',
            'demo3' => '/demo3',
            'demo4' => '/demo4',
            'demo5' => '/demo5',
            'demo6' => '/demo6',
            'demo7' => '/demo7',
            'demo8' => '/demo8',
            'demo9' => '/demo9',
            'demo10' => '/demo10',
        ];

        foreach ($demos as $demo => $url) {
            $this->artisan('config:clear'); // Clear config cache before each test

            $response = $this->get($url);

            $response->assertStatus(200)
                    ->assertViewIs("pages.{$demo}.index");

            // Check that the page doesn't have actual errors (not navigation links)
            $content = $response->getContent();

            // More specific error detection - look for actual error messages, not navigation links
            $this->assertStringNotContainsString('Undefined variable', $content);
            $this->assertStringNotContainsString('Undefined index', $content);
            $this->assertStringNotContainsString('Call to undefined', $content);
            $this->assertStringNotContainsString('ErrorException', $content);
            $this->assertStringNotContainsString('FatalError', $content);
            $this->assertStringNotContainsString('ParseError', $content);
            $this->assertStringNotContainsString('Whoops!', $content);

            $this->assertTrue(true, "✓ {$demo} page loaded successfully");
        }
    }

    /**
     * Test individual demo pages with basic content checks
     */
    public function test_demo1_loads()
    {
        $response = $this->get('/demo1');
        $response->assertStatus(200)->assertViewIs('pages.demo1.index');
    }

    public function test_demo2_loads()
    {
        $response = $this->get('/demo2');
        $response->assertStatus(200)->assertViewIs('pages.demo2.index');
    }

    public function test_demo3_loads()
    {
        $response = $this->get('/demo3');
        $response->assertStatus(200)->assertViewIs('pages.demo3.index');
    }

    public function test_demo4_loads()
    {
        $response = $this->get('/demo4');
        $response->assertStatus(200)->assertViewIs('pages.demo4.index');
    }

    public function test_demo5_loads()
    {
        $response = $this->get('/demo5');
        $response->assertStatus(200)->assertViewIs('pages.demo5.index');
    }

    public function test_demo6_loads()
    {
        $response = $this->get('/demo6');
        $response->assertStatus(200)->assertViewIs('pages.demo6.index');
    }

    public function test_demo7_loads()
    {
        $response = $this->get('/demo7');
        $response->assertStatus(200)->assertViewIs('pages.demo7.index');
    }

    public function test_demo8_loads()
    {
        $response = $this->get('/demo8');
        $response->assertStatus(200)
                ->assertViewIs('pages.demo8.index');

        // Demo8 specific content check
        $content = $response->getContent();
        $this->assertStringContainsString('Swift Setup', $content);
    }

    public function test_demo9_loads()
    {
        $response = $this->get('/demo9');
        $response->assertStatus(200)->assertViewIs('pages.demo9.index');
    }

    public function test_demo10_loads()
    {
        $response = $this->get('/demo10');
        $response->assertStatus(200)->assertViewIs('pages.demo10.index');
    }

    /**
     * Test that demo layouts include required HTML structure
     */
    public function test_demo_layouts_have_proper_html_structure()
    {
        $demos = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6', 'demo7', 'demo8', 'demo9', 'demo10'];

        foreach ($demos as $demo) {
            $response = $this->get("/{$demo}");
            $content = $response->getContent();

            // Check for proper HTML structure
            $this->assertStringContainsString('<!DOCTYPE html', $content);
            $this->assertStringContainsString('<html', $content);
            $this->assertStringContainsString('<head>', $content);
            $this->assertStringContainsString('<body', $content);
            $this->assertStringContainsString('</html>', $content);

            // Check for Laravel-specific patterns
            $this->assertStringContainsString('lang="en"', $content);
        }
    }

    /**
     * Test that demo layouts include sidebar where expected
     */
    public function test_demo_layouts_include_sidebar_where_expected()
    {
        $demosWithSidebar = ['demo1', 'demo3', 'demo4', 'demo5', 'demo6', 'demo8', 'demo10'];

        foreach ($demosWithSidebar as $demo) {
            $response = $this->get("/{$demo}");
            $content = $response->getContent();

            // Check for sidebar presence (flexible check)
            $hasSidebar = strpos($content, 'sidebar') !== false ||
                         strpos($content, 'kt-sidebar') !== false ||
                         strpos($content, 'id="sidebar"') !== false;

            $this->assertTrue($hasSidebar, "Demo {$demo} should have a sidebar");
        }
    }

    /**
     * Test that all demos load CSS and JS assets properly
     */
    public function test_demos_load_assets()
    {
        $demos = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6', 'demo7', 'demo8', 'demo9', 'demo10'];

        foreach ($demos as $demo) {
            $response = $this->get("/{$demo}");
            $content = $response->getContent();

            // Check for CSS and JS assets (flexible patterns for Laravel/Vite)
            $hasAssets = strpos($content, '.css') !== false ||
                        strpos($content, '.js') !== false ||
                        strpos($content, 'vite') !== false ||
                        strpos($content, 'app.css') !== false ||
                        strpos($content, 'app.js') !== false;

            $this->assertTrue($hasAssets, "Demo {$demo} should include CSS/JS assets");
        }
    }

    /**
     * Test responsive design classes are present
     */
    public function test_demos_have_responsive_classes()
    {
        $demos = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6', 'demo7', 'demo8', 'demo9', 'demo10'];

        foreach ($demos as $demo) {
            $response = $this->get("/{$demo}");
            $content = $response->getContent();

            // Check for common responsive/layout classes
            $hasResponsiveClasses = strpos($content, 'lg:') !== false ||
                                   strpos($content, 'md:') !== false ||
                                   strpos($content, 'sm:') !== false ||
                                   strpos($content, 'flex') !== false ||
                                   strpos($content, 'grid') !== false;

            $this->assertTrue($hasResponsiveClasses, "Demo {$demo} should have responsive classes");
        }
    }

    /**
     * Test that demos don't have common Laravel errors
     */
    public function test_demos_dont_have_common_errors()
    {
        $demos = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6', 'demo7', 'demo8', 'demo9', 'demo10'];

        $errorPatterns = [
            'Undefined variable',
            'Undefined index',
            'Call to undefined method',
            'Class not found',
            'Method not found',
            'View [',
            'ErrorException',
            'FatalError',
            'ParseError',
            'Whoops!',
        ];

        foreach ($demos as $demo) {
            $response = $this->get("/{$demo}");
            $content = $response->getContent();

            foreach ($errorPatterns as $pattern) {
                $this->assertStringNotContainsString($pattern, $content,
                    "Demo {$demo} contains error pattern: {$pattern}");
            }
        }
    }

    /**
     * Test that all demos extend the correct base layout
     */
    public function test_demos_extend_correct_base_layout()
    {
        $demos = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6', 'demo7', 'demo8', 'demo9', 'demo10'];

        foreach ($demos as $demo) {
            $response = $this->get("/{$demo}");

            // Each demo should successfully render its view
            $response->assertViewIs("pages.{$demo}.index");

            // Check that the view was rendered without errors
            $response->assertStatus(200);
        }
    }

    /**
     * Performance test - ensure pages load within reasonable time
     */
    public function test_demo_pages_performance()
    {
        $demos = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6', 'demo7', 'demo8', 'demo9', 'demo10'];

        foreach ($demos as $demo) {
            $startTime = microtime(true);

            $response = $this->get("/{$demo}");

            $endTime = microtime(true);
            $loadTime = $endTime - $startTime;

            $response->assertStatus(200);

            // Assert that page loads within 3 seconds (generous for testing)
            $this->assertLessThan(3.0, $loadTime,
                "Demo {$demo} took too long to load: {$loadTime} seconds");
        }
    }

    /**
     * Test that demos have proper page titles
     */
    public function test_demos_have_page_titles()
    {
        $demos = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6', 'demo7', 'demo8', 'demo9', 'demo10'];

        foreach ($demos as $demo) {
            $response = $this->get("/{$demo}");
            $content = $response->getContent();

            // Check that page has a title tag
            $this->assertStringContainsString('<title>', $content, "Demo {$demo} should have a page title");
        }
    }
}