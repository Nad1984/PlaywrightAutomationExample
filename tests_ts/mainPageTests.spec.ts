import { test } from '@playwright/test';
import { POmanager } from "../page_objects_ts/POmanager";

const mainPageTestData = JSON.parse(JSON.stringify(require('../test-data/mainPage_test_data.json')));


test('has title', async ({ page }) => {
  const poManager = new POmanager(page);
  const mainPage = poManager.getMainPage();
  await mainPage.goToUrl(mainPageTestData.url);
  await mainPage.checkTitle();
});


test('Check if logo is visible and it is a link', async({page}) => {
  const poManager = new POmanager(page);
  const mainPage = poManager.getMainPage();
  await mainPage.goToUrl(mainPageTestData.url);
  await mainPage.checkLogoIfVisibleAndItIsLink();
});


test('check if personal-office-button is visible and clickable', async ({page}) => {
  const poManager = new POmanager(page);
  const mainPage = poManager.getMainPage();
  await mainPage.goToUrl(mainPageTestData.url);
  await mainPage.findPersonalOfficeBthnAndClickCheckItisClicked();
});


test('check if busket is not clickable when empty and clickable if not', async ({page})=>
{
  const poManager = new POmanager(page);
  const mainPage = poManager.getMainPage();
  await mainPage.goToUrl(mainPageTestData.url);
  await mainPage.checkIfEmptyBasketVisible();
  await mainPage.addItemToBasket(mainPageTestData.itemName);
  await mainPage.checkIfEmptyBasketNOTVisible();
  await mainPage.clickOnBasketWhenNotEmptyCheckBasketPopUpOpened();
});


test('@Flacky check if header contains 5 elements and click on one element', async ({page})=>
{
  const poManager = new POmanager(page);
  const mainPage = poManager.getMainPage();
  await mainPage.goToUrl(mainPageTestData.url);
  await mainPage.checkHeaderElementscount(mainPageTestData.expectedHeaderElementscount);
  await mainPage.clickOnHeaderElement(mainPageTestData.headerElementName);
  await mainPage.checkHeaderElementNameIsOnThePage(mainPageTestData.headerElementName);

});




// check if a.header-top-list__link contains 5 elements, that can be found by text in 'div.actions' Акції, Доставка та Оплата, Статті, Про магазин.

// nav.menu is present and visible; contain Парфумерія, Макіяж, Волосся, Обличчя, Тіло і ванна





  

