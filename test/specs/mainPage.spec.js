//const assert = require('assert');
let platan_url = "https://supplepay.supplerus.com/";

describe ('Main page tests', () => {
    beforeEach(async() => {
        await browser.setWindowSize(1920, 1080);
        await browser.url(platan_url)
    });

    it('test #001', async () => {
        await $('/html/body/div/div/div/header/div/div/div[2]/div[4]/a').click();
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining('Авторизация') //user not authorized and pressed the button 'Log in'
        });

    it('test #002', async () => {
        await $('/html/body/div/div/div/header/div/div/div[1]/div/a[1]').click();
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining('Авторизация') //user not authorized and pressed the button 'Transfer'
        });

    it ('test #003', async () => {
        await $('/html/body/div/div/div/div/div/div[2]/div/button').click();
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining('Авторизация') // //user not authorized and pressed the button 'Send'
    });

    it ('test #004', async () => {
        await $('/html/body/div/div/div/header/div/div/div[1]/div/a[2]').click();
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining('Авторизация') // //user not authorized and pressed the button 'History'
    });

    it ('test #005', async () => {
        await $('/html/body/div/div/div/footer/div[2]/div[1]/a[1]').click();
        await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining('Политика в отношении обработки персональных данных');
    });

    it ('test #006', async () => {
        await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[3]').click();
        await expect($('/html/body/div/div/div/div/div/div[1]/h2')).toHaveTextContaining('Помощь');
    });

    // it ('test #007', async () => {
    //     await $('/html/body/div/div/div/footer/div[2]/div[1]/a[2]').click();
    //     await expect($('/html/body/div/div/div/div/div/div[1]/h2')).toHaveTextContaining('Авторизация');
    // }); // currently unavailable

    // it ('test #008', async () => {
    //     await $('/html/body/div/div/div/footer/div[2]/div[1]/a[3]').click();
    //     await expect($('/html/body/div/div/div/div/div/div[1]/h2')).toHaveTextContaining('Авторизация');
    // }); // currently unavailable

    it ('test #010', async () => {
        await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').setValue("Abracadabra");
        await expect($('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input')).toHaveTextContaining("") // empty string
    });

    it ('test #011', async () => {
        await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').setValue("e12");
        await expect($('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input')).toHaveTextContaining("") // empty string
    });

    it ('test #012', async () => {
        await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').setValue('<script>alert("text") </script>');
        await expect($('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input')).toHaveTextContaining("") // empty string
    });

    it ('test #013', async () => {
        await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').setValue(`FOO'); DROP TABLE USERS`);
        await expect($('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input')).toHaveTextContaining("") // empty string
    });

    it ('test #014', async () => {
        await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').setValue("12345.6789");
        await expect($('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input')).toHaveTextContaining("") // empty string
    });

    // it ('test #015', async () => {
    //     await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').setValue("'\uD83D\uDE00'");
    //     await expect($('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input')).toHaveTextContaining("") // empty string
    // }); // currently unavailable

    it ('test #016', async () => {
        await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').setValue("1111111111");
        await expect($('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input')).toHaveTextContaining("") // empty string
    });

    it ('test #017', async () => {
        await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').setValue("");
        await expect($('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input')).toHaveTextContaining("") // empty string
    });
});

    // it ('test #007', async () => {
    //     await browser.url(platan_url)
    //     await $('log in button').click();
    //     await $('phonenum field').click();
    //     await $('phonenum field').setValue("79217955889");
    //     await $('send code button').click();
    //     await $('sms field').click();
    //     await $('sms field').waitForDisplayed(); 
    //     await $('sms field').setValue("123456");
    //     await $('finish button').click();
    //     await $('main').click();
    //     await $('user account').click();
    //     const titleOfPage = await browser.getTitle();
    //     expect (await titleOfPage).toEqual("Личный кабинет")
//     });
    // it ('test #013', async () => {
    //     await browser.url(platan_url)
    //     await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').click();
    //     await $('/html/body/div/div/div/div/div/div[2]/div/div[3]/div/input').setValue(kekos);
    //     await $('/html/body/div/div/div/div/div/div[2]/div/button').click();
    //     await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining('Авторизация')
    // });

//     it ('test #009', async () => {
//         await browser.url(platan_url)
//         await $('transfer_selector').click();
//         const titleOfPage = await browser.getTitle();
//         expect (await titleOfPage).toEqual("История")
//     });

//     it ('test #010', async () => {
//         await browser.url(platan_url)
//         await $('transfer_selector').click();
//         const titleOfPage = await browser.getTitle();
//         expect (await titleOfPage).toEqual("История")
//     });

//     it ('test #011', async () => {
//         await browser.url(platan_url)
//         await $('transfer_selector').click();
//         const titleOfPage = await browser.getTitle();
//         expect (await titleOfPage).toEqual("История")
//     });