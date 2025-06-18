**CURRENT MODE: PLAN**

# Technical Specification: Metronic Tailwind Symfony Integration

## Project Overview
Create a Symfony 7.x application integrating Metronic Tailwind HTML templates from demo1 and demo2, with comprehensive testing suite and user documentation following established patterns.

## Architecture Design

### 1. Symfony Application Structure
```
metronic-tailwind-symfony/
├── src/
│   ├── Controller/
│   │   ├── Demo1Controller.php
│   │   └── Demo2Controller.php
│   ├── Service/
│   │   └── MockDataService.php
│   └── Entity/ (if needed for mock data)
├── templates/
│   ├── base.html.twig
│   ├── demo1/
│   │   ├── base.html.twig
│   │   ├── index.html.twig
│   │   └── partials/
│   │       ├── sidebar.html.twig
│   │       ├── header.html.twig
│   │       └── footer.html.twig
│   ├── demo2/
│   │   ├── base.html.twig
│   │   ├── index.html.twig
│   │   └── partials/
│   │       ├── header.html.twig
│   │       ├── navbar.html.twig
│   │       ├── toolbar.html.twig
│   │       └── footer.html.twig
│   └── partials/
│       ├── head.html.twig
│       ├── theme-mode.html.twig
│       └── scripts.html.twig
├── public/
│   └── assets/ (managed by AssetMapper)
├── tests/
│   ├── Controller/
│   ├── Service/
│   └── Functional/
├── assets/
│   ├── css/
│   ├── js/
│   └── media/
└── docs/
    └── INTEGRATION_GUIDE.md
```

### 2. Controller Design
- **Demo1Controller**: Handle sidebar layout routes
- **Demo2Controller**: Handle header layout routes
- **MockDataService**: Generate consistent mock data for both demos

### 3. Template Architecture
- Follow Flask reference structure with Twig syntax
- Modular partials system for reusable components
- Base templates extending main base template
- Consistent variable passing for mock data

### 4. Asset Management Strategy
- Use Symfony AssetMapper for modern asset handling
- Copy Metronic assets to `assets/` directory
- Configure AssetMapper for CSS, JS, and media files
- Maintain original asset structure for easy updates

### 5. Testing Strategy
- **Unit Tests**: Controllers return correct responses, MockDataService generates expected data
- **Functional Tests**: Route accessibility, template rendering, asset loading
- Use Symfony's WebTestCase for functional testing
- PHPUnit for unit testing

### 6. Documentation Structure
Following established patterns with comprehensive user guide including:
- Installation steps
- Development workflow
- Customization guidelines
- Testing procedures

## Detailed Implementation Specifications

### File Specifications

#### Controllers
**Demo1Controller.php**:
- Route: `/demo1` (GET) -> index action
- Route: `/demo1/dashboard/{type}` (GET) -> dashboard variations
- Inject MockDataService dependency
- Return render responses with consistent context data

**Demo2Controller.php**:
- Route: `/demo2` (GET) -> index action
- Route: `/demo2/dashboard/{type}` (GET) -> dashboard variations
- Same service injection and context pattern as Demo1

#### Services
**MockDataService.php**:
- Methods: `getDashboardContext()`, `getAnalyticsData()`, `getUserData()`
- Return arrays matching Flask implementation data structure
- Consistent fake data generation using Faker library

#### Templates
**Base Templates**:
- `templates/base.html.twig`: Master template with common HTML structure
- `templates/demo1/base.html.twig`: Sidebar layout extending base
- `templates/demo2/base.html.twig`: Header layout extending base

**Partials Conversion**:
- Convert Flask Jinja2 syntax to Twig syntax
- Maintain same include structure and variable passing
- Preserve HTML structure and Tailwind classes exactly

#### Assets Configuration
**AssetMapper Setup**:
- Configure `config/packages/asset_mapper.yaml`
- Map Metronic CSS, JS, and media files
- Set up proper paths for fonts and icons
- Configure versioning for production

#### Test Files
**Unit Tests**:
- `tests/Controller/Demo1ControllerTest.php`
- `tests/Controller/Demo2ControllerTest.php`
- `tests/Service/MockDataServiceTest.php`

**Functional Tests**:
- `tests/Functional/Demo1RoutesTest.php`
- `tests/Functional/Demo2RoutesTest.php`
- `tests/Functional/AssetLoadingTest.php`

### Configuration Requirements

#### Dependencies (composer.json)
- `symfony/framework-bundle`: ^7.0
- `symfony/twig-bundle`: ^7.0
- `symfony/asset-mapper`: ^7.0
- `symfony/phpunit-bridge`: ^7.0
- `fakerphp/faker`: ^1.21 (for mock data)

#### Environment Setup
- `.env.local.dist` with development settings
- Proper Symfony configuration for AssetMapper
- PHPUnit configuration file

#### Route Configuration
- `config/routes.yaml` or annotations for controller routes
- Route prefixes: `/demo1/*` and `/demo2/*`
- Default route redirecting to demo1

### Documentation Specifications

#### INTEGRATION_GUIDE.md Structure
1. **Introduction**: Project overview and requirements
2. **Quick Start**: Installation and setup steps
3. **Project Structure**: File organization explanation
4. **Development Guide**:
   - Adding new pages
   - Customizing layouts
   - Working with mock data
5. **Testing**: Running unit and functional tests
6. **Asset Management**: Using AssetMapper effectively
7. **Customization**: Theming and component modification
8. **Deployment**: Production considerations
9. **Troubleshooting**: Common issues and solutions

## Quality Assurance Requirements

### Code Standards
- PSR-12 coding standards
- Symfony best practices
- Twig template standards
- PHPUnit test conventions

### Testing Coverage
- Minimum 80% code coverage for controllers and services
- All routes must have functional tests
- Asset loading verification tests

### Performance Requirements
- Page load time under 2 seconds in development
- Proper asset optimization through AssetMapper
- Efficient template inheritance structure

## IMPLEMENTATION CHECKLIST:

1. Initialize Symfony 7.x project in `metronic-tailwind-symfony/` directory
2. Install required dependencies via Composer (framework, twig, asset-mapper, testing)
3. Configure AssetMapper in `config/packages/asset_mapper.yaml`
4. Copy Metronic assets from `metronic-tailwind-html/dist/` to `assets/` directory
5. Create MockDataService class with methods for dashboard, analytics, and user data
6. Create Demo1Controller with index route and dashboard variations
7. Create Demo2Controller with index route and dashboard variations
8. Create base template `templates/base.html.twig` with common HTML structure
9. Create `templates/partials/head.html.twig` with meta tags and asset imports
10. Create `templates/partials/theme-mode.html.twig` with JavaScript theme handling
11. Create `templates/partials/scripts.html.twig` with JavaScript imports
12. Create `templates/demo1/base.html.twig` extending base template with sidebar layout
13. Create `templates/demo1/index.html.twig` converting HTML content to Twig
14. Create `templates/demo1/partials/sidebar.html.twig` with navigation menu
15. Create `templates/demo1/partials/header.html.twig` with topbar component
16. Create `templates/demo1/partials/footer.html.twig` with footer content
17. Create `templates/demo2/base.html.twig` extending base template with header layout
18. Create `templates/demo2/index.html.twig` converting HTML content to Twig
19. Create `templates/demo2/partials/header.html.twig` with sticky header
20. Create `templates/demo2/partials/navbar.html.twig` with navigation
21. Create `templates/demo2/partials/toolbar.html.twig` with toolbar component
22. Create `templates/demo2/partials/footer.html.twig` with footer content
23. Configure routes in `config/routes.yaml` for both demo controllers
24. Create unit test for Demo1Controller testing route responses and context
25. Create unit test for Demo2Controller testing route responses and context
26. Create unit test for MockDataService testing data generation methods
27. Create functional test for Demo1 routes testing accessibility and rendering
28. Create functional test for Demo2 routes testing accessibility and rendering
29. Create functional test for asset loading verification
30. Set up PHPUnit configuration file with proper test environment
31. Create `docs/INTEGRATION_GUIDE.md` with comprehensive user documentation
32. Write installation and setup instructions in documentation
33. Document project structure and development workflow
34. Add testing procedures and customization guidelines to documentation
35. Test complete application functionality across both demos
36. Verify all tests pass with adequate coverage
37. Validate asset loading and theme functionality
38. Review documentation for completeness and accuracy