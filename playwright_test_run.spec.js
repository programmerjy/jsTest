const { test, expect } = require('@playwright/test');

test('Can Insert Task', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html')
    await page.fill('#taskInput', 'Eat breakfast');
    await page.click('#addBtn');
    await expect(page.locator('#taskList')).toContainText('Eat breakfast');
})