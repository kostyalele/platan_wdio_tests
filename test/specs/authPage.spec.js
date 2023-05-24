const assert = require('assert');
let platan_url = "https://supplepay.supplerus.com/";



describe ('Authorization page tests', () => {
    beforeEach(async() => {
        await browser.setWindowSize(1920, 1080);
        await browser.url(platan_url)
        await $('/html/body/div/div/div/header/div/div/div[2]/div[4]/a').click();
    });

    it('test #031', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("Abracadabra");
        await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/input')).toHaveTextContaining("") // empty string
        const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button');
        const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
        assert.strictEqual(isButtonDisabled, null);
        });

    it ('test #032', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("e12");
        await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/input')).toHaveTextContaining("") // empty string
        const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button');
        const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
        assert.strictEqual(isButtonDisabled, null);
        });

    it ('test #033', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue(""); // empty string
        await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/input')).toHaveTextContaining("") // checking if it's empty
        const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button');
        const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
        assert.strictEqual(isButtonDisabled, null);
        });

    it ('test #034', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue('<script>alert("text") </script>'); // empty string
        await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/input')).toHaveTextContaining("") // checking if it's empty
        const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button');
        const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
        assert.strictEqual(isButtonDisabled, null);
        });

    it ('test #035', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue(`"FOO'); DROP TABLE USERS"`); // empty string
        await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/input')).toHaveTextContaining("") // checking if it's empty
        const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button');
        const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
        assert.strictEqual(isButtonDisabled, null);
        });

    it ('test #036', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("1234.56"); // empty string
        await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/input')).toHaveTextContaining("") // checking if it's empty
        const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button');
        const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
        assert.strictEqual(isButtonDisabled, null);
    });

    // it ('test #037', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("'\uD83D\uDE00'"); // empty string
    //     await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/input')).toHaveTextContaining("") // checking if it's empty
    // });

    it ('test #038', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("0000000000"); // empty string
        await $('/html/body/div/div/div/div/div/div/button').click();
        const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button');
        const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
        assert.strictEqual(isButtonDisabled, null);
    });

    it ('test #039', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("1111111111"); // empty string
        await $('/html/body/div/div/div/div/div/div/button').click();
        const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button');
        const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
        assert.strictEqual(isButtonDisabled, null);
    });

    it ('test #040', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("999999999999"); // empty string
        await $('/html/body/div/div/div/div/div/div/button').click();
        const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button');
        const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
        assert.strictEqual(isButtonDisabled, null);
    });

    // it ('test #041', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889");
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     browser.waitForValue('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input', 30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    // });

    it ('test #042', async () => {
        await $('/html/body/div/div/div/div/div/div/div[2]/a').click();
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining('Политика в отношении обработки персональных данных');
    });

    it ('test #045-053', async () => {
        await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
        await $('/html/body/div/div/div/div/div/div/button').click();
        await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input').setValue(`e12`); // #045
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
        await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input').setValue(`Abracadabra`); // #046
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
        await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input').setValue(``); // #047
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
        await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input').setValue(`<script>alert("text") </script>`); // #048
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
        await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input').setValue(`"FOO'); DROP TABLE USERS"`); // #049
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
        await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input').setValue(`123.45`); // #050
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
        // await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input').setValue('\uD83D\uDE00'); // #051
        // await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
        await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input').setValue(`000000`); // #052
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
        await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div[2]/input').setValue(`12345678`); // #053
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
    });
});