// const assert = require('assert');
// let platan_url = "https://supplepay.supplerus.com/";



// describe ('Transfer money page tests', () => {
//     beforeEach(async() => {
//         await browser.setWindowSize(1920, 1080);
//         await browser.url(platan_url)
//         await $('/html/body/div/div/div/header/div/div/div[2]/div[4]/a').click();
//     });


// // authorization block

//     it('test #091', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue(""); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(""); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue('Abracadabra');
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining(""); // sum field
//     });


//     it('test #092', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("Abracadabra"); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("Abracadabra"); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue('Abracadabra'); // sum field
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining("");
//     });

//     it('test #093', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("e12"); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining(""); 
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("e12"); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining(""); 
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue('e12'); // sum field
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining(""); 
//     });


//     it('test #094', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('<script>alert("text"'); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue('<script>alert("text"'); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue('<script>alert("text"'); // sum field
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining("");
//     });

//     it('test #095', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue(`"FOO'); DROP TABLE USERS"`); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`"FOO'); DROP TABLE USERS"`); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue(`"FOO'); DROP TABLE USERS"`); // sum field
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining("");
//     });


//     it('test #096', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("12345.6789"); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("12345.6789"); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue('12345.6789'); // sum field
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining("");
//     });

//     it('test #097', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("emoji"); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("emoji"); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue('emoji'); // sum field
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining("");
//     });


//     it('test #098', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("0000 0000 0000 0000"); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("0000 0000 0000 0000"); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue('0000 0000 0000 0000'); // sum field
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining("");
//     });

//     it('test #099', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("1111 1111 1111 1111"); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("1111 1111 1111 1111"); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue('1111 1111 1111 1111'); // sum field
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining("");
//     });

//     it('test #100', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("4111 1111 1111 1111"); // recipient's card input
//         await expect($('/html/body/div/div/div/div/div/div/h2')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("1234567890"); // recipient's TNN
//         await expect($('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input')).toHaveTextContaining("");
//         await $('/html/body/div/div/div/div/div/div/div[2]/div/input').setValue('1000'); // sum field
//         await expect($('/html/body/div/div/div/div/div/div/div[2]/div/input')).toHaveTextContaining("");
//     });


// });