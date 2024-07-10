import { expect, type Locator, type Page } from '@playwright/test';

export class EyeCosmeticsPage
{
    headerLocator = "h1";
    maybellinCheckboxLocator = "li#popularinput-checkbox-2243-29159";
    filterListItemLocator = "label.selected-filter-list__item";
    eyebrowPencilLocator = "li[data-id='677317']";
    eyebrowPencilRoleName = 'Maybelline New York Brow Ultra Slim Eyebrow Pencil';

    page: Page;
    header: Locator;
    maybellinCheckbox: Locator;
    filterListItem: Locator;
    eyebrowPencil: Locator;

    constructor(page: Page)
    {
        this.header = page.locator(this.headerLocator);
        this.maybellinCheckbox = page.locator(this.maybellinCheckboxLocator);
        this.filterListItem = page.locator(this.filterListItemLocator);
        // this.filteredListItem = page.getByLabel("Maybelline New York");
         
        this.eyebrowPencil = page.locator(this.eyebrowPencilLocator).getByRole('link', { name: this.eyebrowPencilRoleName }).nth(0);

    }


    async CheckItIsEyeCosmeticsPage(text: string)
    {
        await this.header.waitFor();
        expect(this.header).toContainText(text);
    }

    async selectMaybellineCheckbox(filterName: string)
    {
        await this.maybellinCheckbox.click();
        // await this.filterListItem.waitFor();
        expect(await this.filterListItem).toContainText(filterName);
    }
    
    async clickOnEyebrowPencilItem()
    {
        await this.eyebrowPencil.click();   
    }
  
}

