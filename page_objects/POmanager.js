const {MainPage} = require('../page_objects/MainPage');
const {EyeCosmeticsPage} = require('../page_objects/EyeCosmeticsPage');
const {ProductPage} = require('../page_objects/ProductPage');


class POmanager
{
    constructor(page)
    {
        this.page = page;
        this.mainPage = new MainPage(this.page); 
        this.eyeCosmeticsPage = new EyeCosmeticsPage(this.page);
        this.productPage = new ProductPage(this.page);
    }

    getMainPage()
    {
        return this.mainPage;
    }

    getEyeCosmeticsPage()
    {
        return this.eyeCosmeticsPage;
    }

    getProductPage()
    {
        return this.productPage;
    }

}    

module.exports = {POmanager};