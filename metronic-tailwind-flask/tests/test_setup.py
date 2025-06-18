#!/usr/bin/env python3
"""
Test script to verify Metronic Flask integration setup
"""

import os
import sys
from app import create_app


def test_app_creation():
    """Test Flask app can be created successfully."""
    app = create_app()
    assert app is not None, "Flask app creation failed"


def test_template_paths():
    """Test template and static folder paths are correct."""
    app = create_app()

    # Check template folder
    template_path = app.template_folder
    assert os.path.exists(template_path), f"Template folder missing: {template_path}"

    # Check static folder
    static_path = app.static_folder
    assert os.path.exists(static_path), f"Static folder missing: {static_path}"

    # Check specific templates
    demo1_template = os.path.join(template_path, 'demo1', 'index.html')
    demo2_template = os.path.join(template_path, 'demo2', 'index.html')

    assert os.path.exists(demo1_template), "Demo1 template missing"
    assert os.path.exists(demo2_template), "Demo2 template missing"


def test_routes():
    """Test that routes render successfully."""
    app = create_app()
    client = app.test_client()

    # Test demo1 route
    response1 = client.get('/demo1/')
    assert response1.status_code == 200, f"Demo1 route failed: {response1.status_code}"

    # Test demo2 route
    response2 = client.get('/demo2/')
    assert response2.status_code == 200, f"Demo2 route failed: {response2.status_code}"

    # Test main route (redirect)
    response3 = client.get('/')
    assert response3.status_code in [302, 301], f"Main route failed: {response3.status_code}"


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
        try:
            test_func()
            passed += 1
            print(f"✅ {test_name} test passed")
        except AssertionError as e:
            print(f"❌ {test_name} test failed: {e}")

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