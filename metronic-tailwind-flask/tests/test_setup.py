#!/usr/bin/env python3
"""
Test script to verify Metronic Flask integration setup
"""

import os
import sys
from app import create_app


def test_app_creation():
    """Test Flask app can be created successfully."""
    try:
        app = create_app()
        print("✅ Flask app created successfully")
        return True
    except Exception as e:
        print(f"❌ Flask app creation failed: {e}")
        return False


def test_template_paths():
    """Test template and static folder paths are correct."""
    try:
        app = create_app()

        # Check template folder
        template_path = app.template_folder
        if os.path.exists(template_path):
            print(f"✅ Template folder exists: {template_path}")
        else:
            print(f"❌ Template folder missing: {template_path}")
            return False

        # Check static folder
        static_path = app.static_folder
        if os.path.exists(static_path):
            print(f"✅ Static folder exists: {static_path}")
        else:
            print(f"❌ Static folder missing: {static_path}")
            return False

        # Check specific templates
        demo1_template = os.path.join(template_path, 'demo1', 'index.html')
        demo2_template = os.path.join(template_path, 'demo2', 'index.html')

        if os.path.exists(demo1_template):
            print("✅ Demo1 template exists")
        else:
            print("❌ Demo1 template missing")
            return False

        if os.path.exists(demo2_template):
            print("✅ Demo2 template exists")
        else:
            print("❌ Demo2 template missing")
            return False

        return True

    except Exception as e:
        print(f"❌ Template path test failed: {e}")
        return False


def test_routes():
    """Test that routes render successfully."""
    try:
        app = create_app()
        client = app.test_client()

        # Test demo1 route
        response1 = client.get('/demo1/')
        if response1.status_code == 200:
            print("✅ Demo1 route renders successfully")
        else:
            print(f"❌ Demo1 route failed: {response1.status_code}")
            return False

        # Test demo2 route
        response2 = client.get('/demo2/')
        if response2.status_code == 200:
            print("✅ Demo2 route renders successfully")
        else:
            print(f"❌ Demo2 route failed: {response2.status_code}")
            return False

        # Test main route (redirect)
        response3 = client.get('/')
        if response3.status_code in [302, 301]:  # Redirect
            print("✅ Main route redirects correctly")
        else:
            print(f"❌ Main route failed: {response3.status_code}")
            return False

        return True

    except Exception as e:
        print(f"❌ Route test failed: {e}")
        return False


def main():
    """Run all tests."""
    print("🧪 Testing Metronic Flask Integration Setup")
    print("=" * 50)

    tests = [
        ("App Creation", test_app_creation),
        ("Template Paths", test_template_paths),
        ("Route Rendering", test_routes)
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
    print(f"📊 Test Results: {passed}/{total} tests passed")

    if passed == total:
        print("🎉 All tests passed! Setup is working correctly.")
        print("\nYou can now run the application with:")
        print("  python3 run.py")
        print("\nOr use the start script:")
        print("  ./start.sh (macOS/Linux)")
        print("  start.bat (Windows)")
        return 0
    else:
        print("❌ Some tests failed. Please check the setup.")
        return 1


if __name__ == "__main__":
    sys.exit(main())