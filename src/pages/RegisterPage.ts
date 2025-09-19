import { Page } from "@playwright/test";        
import { expect, test } from "@playwright/test";

export class RegisterPage {
  
    readonly page: Page;    
    constructor(page: Page) {    
        this.page = page;    
    }
    async navigateToRegisterPage() {
        await this.page.goto('https://demo.automationtesting.in/Register.html');
        await expect(this.page.getByRole('heading', { name: 'Register' })).toBeVisible();
    }
    async enterFirstName(firstName: string) {
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    }
    async enterLastName(lastName: string) {
        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    }
    async enterAddress(address: string) {
        await this.page.locator('textarea').click();
        await this.page.locator('textarea').fill(address);
    }
    async enterEmail(email: string) {
        await this.page.locator('input[type="email"]').click();
        await this.page.locator('input[type="email"]').fill(email);
    }   
    async enterPhone(phone: string) {
        await this.page.locator('input[type="tel"]').click();
        await this.page.locator('input[type="tel"]').fill(phone);
    }

}