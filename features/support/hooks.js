const {
    Before,
    After,
    BeforeStep,
    AfterStep,
    Status,
  } = require("@cucumber/cucumber");
  const playwright = require("@playwright/test");
  const { POmanager } = require("../../page_objects/POmanager");
  
  Before(async function () {
    const browser = await playwright.chromium.launch({
      headless: false, args:['--start-maximized']
    });
    
    const context = await browser.newContext({ viewport: null});
    this.page = await context.newPage();
    this.poManager = new POmanager(this.page);
  });
  
  BeforeStep(function () {
    console.log("something before every step");
  });
  
  AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
      await this.page.screenshot({ path: "screenshot_on_failure.png" });
      await console.log("here should be screenshot on failure");
    }
  });
  
  After(function () {
    //to clean up after scenario
    console.log("I am last to execute!");
  });
  