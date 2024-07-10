
import { Page } from '@playwright/test';
import { MainPage } from "../page_objects_ts/MainPage";
import { EyeCosmeticsPage } from "../page_objects_ts/EyeCosmeticsPage";
import { ProductPage } from "../page_objects_ts/ProductPage";



export class POmanager
{
    page: Page;
    mainPage: MainPage;
    eyeCosmeticsPage: EyeCosmeticsPage;
    productPage: ProductPage;

    constructor(page: Page)
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

