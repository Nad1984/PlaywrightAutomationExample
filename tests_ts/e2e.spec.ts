import { test } from '@playwright/test';
import { POmanager } from "../page_objects_ts/POmanager";


const testDataForE2E = JSON.parse(JSON.stringify(require('../test-data/e2e_test_data.json')));


test('@E2E Choose menu item and dropdown menu item and add product to cart', async ({ page }) => 
{
  //main page 

  const poManager = new POmanager(page);
  const mainPage = poManager.getMainPage();
  await mainPage.goToUrl(testDataForE2E.url);
  await mainPage.selectMenuItem();
  await mainPage.clickSubMenuItem();

  // eye cosmetics page

  const eyeCosmeticsPage = poManager.getEyeCosmeticsPage();
  await eyeCosmeticsPage.CheckItIsEyeCosmeticsPage(testDataForE2E.eyeCosmeticsPageText);
  await eyeCosmeticsPage.selectMaybellineCheckbox(testDataForE2E.filterName);
  await eyeCosmeticsPage.clickOnEyebrowPencilItem();
  

  // product page

  const productPage = poManager.getProductPage();
  await productPage.checkIfItIsProductage(testDataForE2E.productItemName);
  await productPage.filterPencilColorAndCheckIfCorrectNameChosen(testDataForE2E.expectedColorName);
  await productPage.clickBuyButton();
  await productPage.checkIfTotalSumMatchesWithItemPrice();

}); 