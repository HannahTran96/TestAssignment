import { log } from 'console';
import { test, expect } from '../../src/fixture/fixture';
import { autoDismissDialogs, login, NegativeLoginScenario } from '../../src/pages/LoginPage';
import { admin, password } from '../../src/utils/data';
import fs from 'fs';
import path from 'path';

// Load scenarios from JSON file
const jsonPath = path.resolve(__dirname, './datatest/login.json');
const raw = fs.readFileSync(jsonPath, 'utf-8');
const negativeLoginData: NegativeLoginScenario[] = JSON.parse(raw);

test.describe('Test suite for login', {tag: ['@ui', '@login']}, async() => {
    test('Verify that login successfull with admin role', {tag: ['@smoke', '@regression']} , async ({ loginPage, page}) => {
        await test.step('Login by admin', async() => {
            await login(loginPage, admin, password)
        })
        await test.step('Dismiss dialog', async() => {
            autoDismissDialogs(page)
        })
        await test.step('Verify that user will be automatically redirected to Dashboard page after login', async() => {
            await expect(page.locator('h6')).toHaveText('Dashboard');
        })
    });
    for (const scenario of negativeLoginData) {
        test(
          `${scenario.caseId} - ${scenario.testCaseName}`, {tag: scenario.tag},
          async ({ loginPage }) => {
            await test.step('Enter user name, password and click on Login button', async() => {
              await login(loginPage, scenario.username, scenario.password);
            })
            await test.step('Verify can not login and error message should be displayed', async() => {
              if(scenario.username === ' ' && scenario.password === ' ') {
                await expect(loginPage.getByText(scenario.expectedError)).toHaveCount(2)
              } else {
                await expect(loginPage.getByText(scenario.expectedError)).toBeVisible()
              }
            })
          }
        );
      }
})


