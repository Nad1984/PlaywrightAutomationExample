const { test, expect } = require('@playwright/test');

class EyeCosmeticsPage
{
    headerLocator = "h1";
    maybellinCheckboxLocator = "li#popularinput-checkbox-2243-29159";
    filterListItemLocator = "label.selected-filter-list__item";
    eyebrowPencilLocator = "li[data-id='677317']";
    eyebrowPencilRoleName = 'Maybelline New York Brow Ultra Slim Eyebrow Pencil';
    
    constructor(page)
    {
        this.header = page.locator(this.headerLocator);
        this.maybellinCheckbox = page.locator(this.maybellinCheckboxLocator);
        this.filterListItem = page.locator(this.filterListItemLocator);
        // this.filteredListItem = page.getByLabel("Maybelline New York");
         
        this.eyebrowPencil = page.locator(this.eyebrowPencilLocator).getByRole('link', { name: this.eyebrowPencilRoleName }).nth(0);

    }


    async CheckItIsEyeCosmeticsPage(text)
    {
        await this.header.waitFor();
        expect(this.header).toContainText(text);
    }

    async selectMaybellineCheckbox(filterName)
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

module.exports = {EyeCosmeticsPage};