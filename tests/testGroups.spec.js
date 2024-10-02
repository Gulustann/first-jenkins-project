import {test} from "@playwright/test";

//Groups similar tests - like user story each tests groups together
test.describe("Test Group1", () => {

    test.beforeAll(async() => {
        console.log("Before all executed");
    });

    test.afterAll(async() => {
        console.log("After all executed");
    });

    test.beforeEach(async() => {
        console.log("Before each executed");
    });

    test.afterEach(async() => {
        console.log("After each executed");
    });

    test("Test Case 1", async ({page}) => {
        console.log("Test case 1 executed");
    });

    test("Test Case 2", async ({page}) => {
        console.log("Test case 2 executed");
    });

    test("Test Case 3", async ({page}) => {
        console.log("Test case 3 executed");
    });
});
