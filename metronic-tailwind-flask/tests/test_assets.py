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

    print("🔍 Checking required asset files...")
    all_exist = True

    for asset in required_assets:
        asset_path = os.path.join(static_folder, asset)
        if os.path.exists(asset_path):
            file_size = os.path.getsize(asset_path)
            print(f"✅ {asset} ({file_size:,} bytes)")
        else:
            print(f"❌ {asset} - NOT FOUND")
            all_exist = False

    return all_exist


def test_asset_urls():
    """Test that asset URLs are generated correctly."""
    app = create_app()
    app.config['SERVER_NAME'] = 'localhost:5000'

    with app.app_context():
        from flask import url_for

        print("\n🔗 Testing asset URL generation...")

        test_assets = [
            ('css/styles.css', 'Main CSS'),
            ('js/core.bundle.js', 'Core JS'),
            ('vendors/keenicons/styles.bundle.css', 'Icons CSS'),
            ('vendors/apexcharts/apexcharts.min.js', 'ApexCharts JS')
        ]

        for asset_path, description in test_assets:
            try:
                url = url_for('static', filename=asset_path)
                print(f"✅ {description}: {url}")
            except Exception as e:
                print(f"❌ {description}: Error - {e}")
                return False

        return True


def test_flask_serving():
    """Test Flask serving with test client."""
    app = create_app()

    print("\n🌐 Testing Flask asset serving...")

    with app.test_client() as client:
        # Test main CSS file
        response = client.get('/assets/css/styles.css')
        if response.status_code == 200:
            print(f"✅ CSS file served (Content-Type: {response.content_type})")
        else:
            print(f"❌ CSS file failed: {response.status_code}")
            return False

        # Test main JS file
        response = client.get('/assets/js/core.bundle.js')
        if response.status_code == 200:
            print(f"✅ JS file served (Content-Type: {response.content_type})")
        else:
            print(f"❌ JS file failed: {response.status_code}")
            return False

        # Test demo page rendering
        response = client.get('/demo1/')
        if response.status_code == 200:
            html_content = response.get_data(as_text=True)
            if 'css/styles.css' in html_content:
                print("✅ Demo page includes CSS reference")
            else:
                print("❌ Demo page missing CSS reference")
                return False

            if 'js/core.bundle.js' in html_content:
                print("✅ Demo page includes JS reference")
            else:
                print("❌ Demo page missing JS reference")
                return False
        else:
            print(f"❌ Demo page failed: {response.status_code}")
            return False

        return True


def test_template_references():
    """Test that templates reference the correct assets."""
    print("\n📄 Checking template asset references...")

    # Check head.html
    head_path = 'templates/partials/head.html'
    if os.path.exists(head_path):
        with open(head_path, 'r') as f:
            head_content = f.read()
            if 'css/styles.css' in head_content:
                print("✅ head.html references correct CSS file")
            else:
                print("❌ head.html missing correct CSS reference")
                return False
    else:
        print("❌ head.html not found")
        return False

    # Check scripts.html
    scripts_path = 'templates/partials/scripts.html'
    if os.path.exists(scripts_path):
        with open(scripts_path, 'r') as f:
            scripts_content = f.read()
            if 'js/core.bundle.js' in scripts_content:
                print("✅ scripts.html references correct JS file")
            else:
                print("❌ scripts.html missing correct JS reference")
                return False
    else:
        print("❌ scripts.html not found")
        return False

    return True


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
        if test_func():
            passed += 1
        else:
            print(f"❌ {test_name} test failed")

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