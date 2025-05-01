import { log } from 'console';
import { test, expect } from '../../src/fixture/fixture';
import { admin, password } from '../../src/utils/data';
import fs from 'fs';
import path from 'path';
import { SearchScenario } from '../../src/pages/HomePage';
import { clickButtonByName, fillText } from '../../src/base/baseFunction';
import { searchField } from '../../src/pageLocators/HomePageLocator';
  
const jsonPath = path.resolve(__dirname, './datatest/search.json');
const raw = fs.readFileSync(jsonPath, 'utf-8');
const searchScenarios: SearchScenario[] = JSON.parse(raw);
  
  test.describe('Data-driven: Employee Search Feature', () => {
    for (const scenario of searchScenarios) {
      test(`${scenario.caseId} - ${scenario.testCaseName}`, async ({ authenticatedPage, page }) => {
        // Ensure we're on Admin page
        await authenticatedPage.click('a[href*="viewAdminModule"]');
        await expect(authenticatedPage).toHaveURL(/admin/);
        await test.step('Fill search value to user name field', async() => {
          await fillText(authenticatedPage.locator(searchField(scenario.searchfiled)), scenario.value)
        })
        await test.step('Click on Search button', async() => {
          await clickButtonByName(page, 'Search')
        })
        if (scenario.expectResults) {
          await expect(authenticatedPage.locator('div.oxd-table-card')).toHaveCount(1)
          await expect(authenticatedPage.getByText(scenario.value).nth(1)).toBeVisible()
        } else {
          const noRecords = authenticatedPage.locator('span.oxd-text:has-text("No Records Found")');
          await expect(noRecords).toBeVisible();
        }
      });
    }
  });