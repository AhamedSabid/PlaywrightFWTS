import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import registerData from '../data/registerData.json';


test('Register test', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.navigateToRegisterPage();
  await registerPage.enterFirstName(registerData.firstName);
  await registerPage.enterLastName(registerData.lastName);
  await registerPage.enterAddress(registerData.address);
  await registerPage.enterEmail(registerData.email);
  await registerPage.enterPhone(registerData.phone);

});