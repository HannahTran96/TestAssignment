# TestAssignment

# Project Name

**UI Test Automation with Playwright**

This repository contains UI test automation for the **OrangeHRM demo application** using **Playwright** and is integrated with **GitHub Actions** for continuous integration and reporting.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Test Execution](#test-execution)
- [CI/CD Integration with GitHub Actions](#cicd-integration-with-github-actions)
- [Framework Structure and Rationale](#framework-structure-and-rationale)

---

## Introduction

This project uses **Playwright** to perform automated testing on the **OrangeHRM demo application**. The tests run in different browsers (Chromium, Firefox, Webkit) to ensure cross-browser compatibility.

### Features:
- Automated end-to-end tests for UI functionality: Login and Search in Admin page
- GitHub Actions integration for CI/CD pipeline
- Playwright-based smoke and regression tests and can run following the tag for each feature
- Test reports generated with **CTRf** reports

---

## Framework Structure and Rationale
### Framework Structure

The framework is organized into several key components:

1. **Test Directory** (`/tests`): This directory contains all the test scripts organized by test types. For instance, UI tests, regression tests, smoke tests, etc. The tests are written using **Playwright** APIs, which provide powerful capabilities for browser automation.

2. **Pages Directory** (`/src/pages`): The Page Object Model (POM) is used to separate the test code from the browser interaction logic. This directory contains reusable page objects that are used across multiple tests.

3. **Fixtures** (`/src/fixture`): Fixtures provide a way to initialize and manage common states for tests. They could contain logic for logging in, setting up test data, and clearing states before/after tests.

4. **Test Configuration** (`/playwright.config.ts`): The configuration file to customize Playwright settings such as browser options, timeout values, retries, and projects.

5. **GitHub Actions Workflow** (`/.github/workflows/`): This folder contains the YAML files for configuring the CI/CD pipeline using GitHub Actions. It triggers tests when a pull request is created or updated, and on a schedule.

### Rationale Behind Framework Decisions

1. **Playwright**:
   - **Playwright** is chosen because of its ability to automate modern web applications across multiple browsers (Chromium, Firefox, WebKit). It supports both headless and headed browser modes, making it ideal for CI/CD automation.
   - Playwright also offers powerful tools for interacting with page elements, handling pop-ups, capturing screenshots, and running tests in parallel, which is critical for scaling tests in a continuous integration pipeline.

2. **Page Object Model (POM)**:
   - The **Page Object Model (POM)** is used to ensure maintainability and scalability of the test suite. By organizing browser interactions into reusable components (pages), tests become more readable and easier to update when the application UI changes.

3. **GitHub Actions**:
   - **GitHub Actions** is used for Continuous Integration (CI) and Continuous Deployment (CD). By using GitHub Actions, tests are automatically run on each pull request, ensuring that no breaking changes are introduced. The integration with GitHub allows for seamless triggering of tests on commit, PR, or on a scheduled basis.
   - The workflow is configured to execute tests on the `main` and `master` branches and provide useful feedback on the status of the tests via the CTRf report format. The results can be viewed directly within GitHub Actions.

4. **CTRf Report**:
   - **CTRf Report** format is used for reporting test results as it provides a structured format that is easy to parse and understand. It provides detailed information on test outcomes, including failed, skipped, and flaky tests, which is crucial for analyzing test stability and identifying issues early.

---
## Getting Started

To get started with this project, you'll need to have **Node.js** and **npm** installed. Then, clone the repository and install the necessary dependencies.

### Prerequisites:

- **Node.js** (version 16 or later)
- **npm** (Node Package Manager)
- **Playwright** dependencies for Chromium, Firefox, and Webkit browsers

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/HannahTran96/TestAssignment.git
   ```

2. Install dependencies:
    npm install

3. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```

---

## Test Execution

### Run Locally:

To run the tests locally, use the following command:

```bash
npm test
```
To run the test with parameter : specific project

```bash
npm test -- --project=chromium
```
To run the test with parameter : specific tag

```bash
npm test -- --grep @login
```

---

## CI/CD Integration with GitHub Actions

This project is integrated with GitHub Actions to run tests automatically on every **push** or **pull request** to the `main` or `master` branch.

Trigger on Pull Request: This workflow triggers when a Pull Request is created or updated against the main or master branches.

Install Dependencies: The workflow installs the required dependencies using npm ci and installs the Playwright browsers along with their dependencies using npx playwright install --with-deps.

Run Tests: The tests are executed using npm test for UI tests or npm run regression for scheduled tests.

Generate CTRf Report: After tests are completed, the CTRf report is generated using the npx github-actions-ctrf ctrf/ctrf-report.json command.

Upload CTRf Report: The generated report is uploaded to GitHub Actions artifacts so it can be downloaded and reviewed later.

Failure Handling: If the tests fail, detailed test results will also be uploaded for troubleshooting.

Viewing Reports on GitHub Actions
Once the tests are executed, you can view the test results and CTRf reports in the GitHub Actions tab of the repository.

Go to the Actions tab in your GitHub repository.

Click on the relevant workflow run (either triggered by a pull request or a scheduled run).

In the run details, you can find the Artifacts section, where the CTRf report is available to download.
---

### Note:

1. Remember to update the `username` and `repository` placeholders where necessary, especially in the clone command and repository links.
2. If you are facing issues with browser installation in GitHub Actions, please refer to the troubleshooting section above or check the Playwright [documentation](https://playwright.dev/).
