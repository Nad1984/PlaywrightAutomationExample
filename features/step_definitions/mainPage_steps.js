const { When, Then, Given } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("open url {string} in the browser", async function (url) {
  this.mainPage = this.poManager.getMainPage();
  await this.mainPage.goToUrl(url);
});

Then("title is as expected", { timeout: 100 * 1000 }, async function () {
  await this.mainPage.checkTitle();
});

Then("logo is visible", async function () {
  await this.mainPage.checkLogoIfVisibleAndItIsLink();
});

When("click personal-office-button", async function () {
  await this.mainPage.findPersonalOfficeBthnAndClick();
});

Then("personal office pop-up is visible", async function () {
  await this.mainPage.checkPersonalOfficeBthnClicked();
});

Then(
  "{string} header elements are present on the main Page",
  async function (expectedHeaderElementscount) {
    await this.mainPage.checkHeaderElementscount(expectedHeaderElementscount);
  }
);

When("click on header element {string}", async function (headerElementName) {
  await this.mainPage.clickOnHeaderElement(headerElementName);
});

Then(
  "browser went to the clicked Page and header {string} is present",
  async function (headerElementName) {
    await this.mainPage.checkHeaderElementNameIsOnThePage(headerElementName);
  }
);


