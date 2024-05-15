const { test, expect } = require('@playwright/test');



class ProductPage
{
    productItemNameLocator = "span.product-item__name";
    itemPriceLocator = "span.price_item[itemprop='price']";
    colorSelectDropDownLocator = 'label';
    colorSelectDropDownText = '- Medium Brown';
    coolBrownColorText = '- Cool Brown';
    buyButtonLocator = "div.button.buy";
    totalSumPopUpLocator = 'div.total';

    constructor(page)
    {
        this.productItemName = page.locator(this.productItemNameLocator);
        this.itemPrice = page.locator(this.itemPriceLocator);
        this.colorSelectDropDown = page.locator(this.colorSelectDropDownLocator).filter({hasText: this.colorSelectDropDownText});
        this.coolBrownColor = page.getByText(this.coolBrownColorText);
        this.buyButton = page.locator(this.buyButtonLocator);
        // this.totalSumPopUp = page.getByText(/Загальна сума/);
        this.totalSumPopUp = page.locator(this.totalSumPopUpLocator);
    }
    async checkIfItIsProductage(productItemName)
    {
        console.log('productItemName is: ' + this.productItemName);
        await this.productItemName.waitFor();
        expect(this.productItemName).toContainText(productItemName);
    }

    async getProductPrice()
    {
        const price = await this.itemPrice.textContent();
        return price 
    }

    async filterPencilColorAndCheckIfCorrectNameChosen(expectedColorName)
    {
        await this.colorSelectDropDown.click();
        await this.coolBrownColor.waitFor();
        await this.coolBrownColor.click();
        expect(this.coolBrownColor).toHaveText === expectedColorName;
    }

    async clickBuyButton()
    {
        await this.buyButton.waitFor();
        await this.buyButton.click();
    }

    async checkIfTotalSumMatchesWithItemPrice()
    {;
        const price = await this.getProductPrice();
        console.log('ціна: ' + price)
        await expect(this.totalSumPopUp).toContainText(price);
        console.log(await this.totalSumPopUp.textContent());
    }


}

module.exports = {ProductPage};