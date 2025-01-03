# Playwright TS Automation Framework

## About

This project is designed to practice using Playwright with TypeScript for automating test cases of Automation Exercise.

---

## Key Features

- **Playwright Integration**: For cross-browser end-to-end testing.
- **TypeScript Support**: Ensures type safety and scalable code.
- **Environment Management**: Configured using `.env` files for development, staging, and production.
- **Page Object Model (POM)**: Enhances code reusability and test readability.
- **Tag-Based Test Execution**: Enables running tests by tags for focused execution.
- **Reporting**: Integrated with Playwright's built-in reporters and Allure Report for detailed analytics.
- **Pre-commit Hooks**: Configured with Husky to enforce code quality checks before commits.
- **CI/CD Pipelines**: Set up using Jenkins for seamless integration and deployment.
- **Dependency Management**: Managed using Yarn for streamlined workflows.

---

## Prerequisites

Ensure the following tools are installed on your system to run this project:

- **Git**: [Download Git](https://git-scm.com/downloads) or [Download GitHub Desktop](https://desktop.github.com/)
- **Visual Studio Code**: [Download VSCode](https://code.visualstudio.com/)
- **Node.js**: [Download NodeJS](https://nodejs.org/)
- **Playwright**: [Installing Playwright for VSCode](https://playwright.dev/docs/intro/)
- **Allure Playwright**: [Installing allure-playwright reporter](https://github.com/allure-framework/allure-playwright)

_Note: Always download the latest stable version compatible with your OS and CPU architecture._

---

## Using This Project

1. Clone the project repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Open the project folder in VSCode:
   - Click **File > Open Folder...**
4. Ensure the official Playwright VSCode plugin is installed for better development experience.

---

## Test Execution and Reporting

### Running Tests

Follow these steps to execute and report test results:

1. Run all for Dev env:
   ```bash
   yarn e2eDev
   ```
2. Execute tests by tag:
   ```bash
   yarn e2eDev --grep=@tagName
   ```

### Generating Reports

1. **Allure Report**:
   - Generate the report:
     ```bash
     yarn allure-report
     ```
2. **Playwright Native Report**:
   - Open the following file in your preferred browser:
     ```
     reports/playwright-report/index.html
     ```

---

## External References

- [Playwright User Guide](https://playwright.dev/docs/intro/)
- [Allure Playwright](https://github.com/allure-framework/allure-playwright)
- [Getting Started with VS Code](https://code.visualstudio.com/docs)
- [Element Identification / Selectors](https://playwright.dev/docs/selectors/)
- [Page Object Model Design Pattern](https://playwright.dev/docs/pom/)
- [Running Tests](https://playwright.dev/docs/running-tests)
