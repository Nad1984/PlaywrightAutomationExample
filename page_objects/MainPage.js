const { test, expect } = require('@playwright/test');

class MainPage
{
    makeupMenuItemText = "Макіяж";
    eyesSubmenuItemText = "Очі";
    logoLocator = 'a.logo';
    linkAttribute = 'href';
    personalOfficeBthnLocator = '.header-office';
    headerOfficePopUpHeaderLocator = 'h2';
    headerOfficePopUpHeaderText = 'Вхід до особистого кабінету';
    emptyBasketLocator = 'div.header-basket.empty';
    productsWrapperLocator = '.simple-slider-list__link';
    itemNameLocator = 'a.simple-slider-list__name';
    buyBthnText = 'Купити';
    basketNameText = 'Кошик';
    closeBasketPopUpLocator = "div[class='popup__window'] div[class='popup-close close-icon']";
    notEmptyBasketLocator = 'div.header-basket';
    headerElementsLocator = 'a.header-top-list__link';
    newPageHeaderLocator = 'h1';


    constructor(page)
    {
        this.page = page;
        this.makeupMenuItem = page.getByText(this.makeupMenuItemText, {exact: true});
        this.eyesSubmenuItem = page.getByText(this.eyesSubmenuItemText, {exact: true});
        this.logo = page.locator(this.logoLocator);
        this.logoAttribute = page.locator(this.logoLocator).getAttribute(this.linkAttribute);
        this.personalOfficeBthn = page.locator(this.personalOfficeBthnLocator);
        this.enterHeaderOfficePopUp = page.locator(this.headerOfficePopUpHeaderLocator).getByText(this.headerOfficePopUpHeaderText);
        this.emptyBasket = page.locator(this.emptyBasketLocator);
        this.productsWrapper = page.locator(this.productsWrapperLocator);
        this.basketName = page.getByText(this.basketNameText);
        this.closeBasketPopUp = page.locator(this.closeBasketPopUpLocator);
        this.basketWithProduct = page.locator(this.notEmptyBasketLocator);
        this.headerElements = page.locator(this.headerElementsLocator);
        this.newPageHeader = page.locator(this.newPageHeaderLocator);
    }

    async goToUrl(url)
        {
            await this.page.goto(url);
        }

    async selectMenuItem()
        {
            await this.makeupMenuItem.hover();
        }

    async clickSubMenuItem()
    {
        await this.eyesSubmenuItem.click();
    }
    async checkTitle()
    {
        await expect(this.page).toHaveTitle(/MAKEUP/);
    }

    async checkLogoIfVisibleAndItIsLink()
    {
        await expect(this.logo).toBeVisible();
        await expect(this.logoAttribute).not.toBeNull();
    }

    async findPersonalOfficeBthnAndClickCheckItisClicked()
    {
        await expect(this.personalOfficeBthn).toBeVisible();
        await this.personalOfficeBthn.click();
        await expect(this.enterHeaderOfficePopUp).toBeVisible();  
    }

    async checkIfEmptyBasketVisible()
    {
        await expect(this.emptyBasket).toBeVisible();
    }

    async checkIfEmptyBasketNOTVisible()
    {
        await expect(this.emptyBasket).not.toBeVisible();
    }

    async addItemToBasket(itemName)
    {
        console.log(await this.productsWrapper.count());
        for(let i = 0; i < await this.productsWrapper.count() - 1; ++i)
        {
            if(await this.productsWrapper.nth(i).locator(this.itemNameLocator).textContent() === itemName)
            {
            console.log(await this.productsWrapper.nth(i).locator(this.itemNameLocator).textContent());
            await this.productsWrapper.nth(i).locator(this.itemNameLocator).hover();
            await this.productsWrapper.nth(i).getByText(this.buyBthnText).click();
            break;
            }
        }
        await expect(this.basketName).toBeVisible();
        await this.closeBasketPopUp.click();
    }

    async clickOnBasketWhenNotEmptyCheckBasketPopUpOpened()
    {
        await this.basketWithProduct.click();
        await expect(this.basketName).toBeVisible();
    }

    async checkHeaderElementscount(expectedHeaderElementscount)
    {
        const mainHeaderContent = await this.headerElements.allTextContents();
        const headerElementscount = await this.headerElements.count();
        expect(headerElementscount).toBe(expectedHeaderElementscount);
      
        console.log(mainHeaderContent);
        console.log(headerElementscount);
    }

    async clickOnHeaderElementCheckThatClicked(headerElementName)
    {
        for(let i=0; i< await this.headerElements.count() - 1; i++)
        {
            if(await this.headerElements.nth(i).textContent() === headerElementName)
            {
            await this.headerElements.nth(i).getByText(headerElementName).click();
            break;
            }
        }
        expect(await this.newPageHeader).toContainText(headerElementName);
    }

}

module.exports = {MainPage};