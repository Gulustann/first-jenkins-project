import {test} from "@playwright/test"

// generate empty test
test("Getting the title", async ({page}) => {
    await page.goto("https://practice.cydeo.com/");

    let actualTitle = await page.title();
    //expect(actualTitle).toBe("Practice CYDEO");
    console.log(actualTitle);
});

test("Getting the current URL", async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
    let currentURL = page.url();
    console.log(currentURL);
});

test("Set the window size", async ({page}) => {
    await page.setViewportSize({width: 2500, height: 1500});
    await page.goto("https://practice.cydeo.com/");

});

