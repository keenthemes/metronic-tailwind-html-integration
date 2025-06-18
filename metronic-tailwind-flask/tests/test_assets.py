#!/usr/bin/env python3
"""
Test script to verify asset serving in Metronic Flask integration
"""

import os
import sys
from app import create_app


def test_asset_files():
    """Test that required asset files exist."""
    app = create_app()
    static_folder = app.static_folder

    required_assets = [
        'css/styles.css',
        'js/core.bundle.js',
        'vendors/keenicons/styles.bundle.css',
        'vendors/apexcharts/apexcharts.min.js'
    ]

    for asset in required_assets:
        asset_path = os.path.join(static_folder, asset)
        assert os.path.exists(asset_path), f"Asset {asset} not found at {asset_path}"


def test_asset_urls():
    """Test that asset URLs are generated correctly."""
    app = create_app()
    app.config['SERVER_NAME'] = 'localhost:5000'

    with app.app_context():
        from flask import url_for

        test_assets = [
            ('css/styles.css', 'Main CSS'),
            ('js/core.bundle.js', 'Core JS'),
            ('vendors/keenicons/styles.bundle.css', 'Icons CSS'),
            ('vendors/apexcharts/apexcharts.min.js', 'ApexCharts JS')
        ]

        for asset_path, description in test_assets:
            url = url_for('static', filename=asset_path)
            assert url is not None, f"Failed to generate URL for {description}"
            assert asset_path in url, f"URL {url} doesn't contain asset path {asset_path}"


def test_flask_serving():
    """Test Flask serving with test client."""
    app = create_app()

    with app.test_client() as client:
        # Test main CSS file
        response = client.get('/assets/css/styles.css')
        assert response.status_code == 200, f"CSS file failed with status {response.status_code}"

        # Test main JS file
        response = client.get('/assets/js/core.bundle.js')
        assert response.status_code == 200, f"JS file failed with status {response.status_code}"

        # Test demo page rendering
        response = client.get('/demo1/')
        assert response.status_code == 200, f"Demo page failed with status {response.status_code}"

        html_content = response.get_data(as_text=True)
        assert 'css/styles.css' in html_content, "Demo page missing CSS reference"
        assert 'js/core.bundle.js' in html_content, "Demo page missing JS reference"


def test_template_references():
    """Test that templates reference the correct assets."""
    # Check head.html
    head_path = 'templates/partials/head.html'
    assert os.path.exists(head_path), "head.html not found"

    with open(head_path, 'r') as f:
        head_content = f.read()
        assert 'css/styles.css' in head_content, "head.html missing correct CSS reference"

    # Check scripts.html
    scripts_path = 'templates/partials/scripts.html'
    assert os.path.exists(scripts_path), "scripts.html not found"

    with open(scripts_path, 'r') as f:
        scripts_content = f.read()
        assert 'js/core.bundle.js' in scripts_content, "scripts.html missing correct JS reference"


def main():
    """Run all asset tests."""
    print("🧪 Testing Metronic Flask Asset Serving")
    print("=" * 50)

    tests = [
        ("Asset Files Exist", test_asset_files),
        ("Asset URLs Generate", test_asset_urls),
        ("Template References", test_template_references),
        ("Flask Serving", test_flask_serving)
    ]

    passed = 0
    total = len(tests)

    for test_name, test_func in tests:
        print(f"\n📋 Testing {test_name}...")
        try:
            test_func()
            passed += 1
            print(f"✅ {test_name} test passed")
        except AssertionError as e:
            print(f"❌ {test_name} test failed: {e}")

    print("\n" + "=" * 50)
    print(f"📊 Asset Test Results: {passed}/{total} tests passed")

    if passed == total:
        print("🎉 All asset tests passed! Assets should load correctly.")
        print("\nTo start the application:")
        print("  source venv/bin/activate")
        print("  python3 run.py")
        print("  # Or on a different port:")
        print("  flask run --port=8000")
        return 0
    else:
        print("❌ Some asset tests failed. Check the issues above.")
        return 1


if __name__ == "__main__":
    sys.exit(main())