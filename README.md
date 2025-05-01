# TestAssignment

# Project Name

**UI Test Automation with Playwright**

This repository contains UI test automation for the **OrangeHRM demo application** using **Playwright** and is integrated with **GitHub Actions** for continuous integration and reporting.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Test Execution](#test-execution)
- [CI/CD Integration with GitHub Actions](#cicd-integration-with-github-actions)

---

## Introduction

This project uses **Playwright** to perform automated testing on the **OrangeHRM demo application**. The tests run in different browsers (Chromium, Firefox, Webkit) to ensure cross-browser compatibility.

### Features:
- Automated end-to-end tests for UI functionality: Login and Search in Admin page
- GitHub Actions integration for CI/CD pipeline
- Playwright-based smoke and regression tests and can run following the tag for each feature
- Test reports generated with **CTRf** reports

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
