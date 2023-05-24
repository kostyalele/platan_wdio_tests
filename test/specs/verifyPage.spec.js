// const assert = require('assert');
// let platan_url = "https://supplepay.supplerus.com/";

// describe('Verification page tests', () => {
//   beforeEach(async () => {
//     await browser.setWindowSize(1920, 1080);
//     await browser.url(platan_url);
//     await $('/html/body/div/div/div/header/div[2]/div/div[2]/div[4]/a').click();
//   });

//   it('test #076', async () => {
//     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9117679321"); // empty string
//     await $('/html/body/div/div/div/div/div/div/button').click();
//     await $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button

//     await browser.waitUntil(async () => {
//       const value = await $('/html/body/div/div/div/div/div/div/div[2]/div[2]').getValue();
//       return value !== null && value !== '';
//     }, {
//       timeout: 15000,
//       timeoutMsg: 'Element did not have a value within the specified timeout',
//     });

//     // await $('/html/body/div/div/div/div/div/div/button').click(); 
//     // await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click(); // correct auth, currently unavailable
//     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('Manokhin'); // Second name
//     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue('Konstantin'); // First name
//     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('Vladimirovich'); // Last name
//     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('1234567890'); // TNN
//     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('Russian Federation'); // Citizenship
//     await $('/html/body/div/div/div/div/div/div/button').click(); // Finish the verification button
//     await $('transfer selector').click();
//     await $('transfer header').toHaveTextContaining();
//   });

    // it('test #067', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889");
    //     await $('/html/body/div/div/div/div/div/div/button').click(); 
    //     let elem = await $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); // all fields blank
    // });

//     it('test #068', async () => {
//         // await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         // await $('/html/body/div/div/div/div/div/div/button').click();
//         // let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         // elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("e12") // Second name    
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("e12") // First name 
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue("e12") // Last name  
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue("e12") // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue("e12") // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // all fail
//     });

//     it('test #069', async () => {
//         // await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         // await $('/html/body/div/div/div/div/div/div/button').click();
//         // let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         // elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('\uD83D\uDE00') // Second name    
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue('\uD83D\uDE00') // First name 
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('\uD83D\uDE00') // Last name  
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('\uD83D\uDE00') // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('\uD83D\uDE00') // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // all fail
//     });

//     it('test #070', async () => {
//         // await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         // await $('/html/body/div/div/div/div/div/div/button').click();
//         // let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         // elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("Abracadabra") // Second name    
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("Abracadabra") // First name 
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue("Abracadabra") // Last name  
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue("Abracadabra") // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue("Abracadabra") // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // TNN fail
//     });

//     it('test #071', async () => {
//         // await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         // await $('/html/body/div/div/div/div/div/div/button').click();
//         // let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         // elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue("1234567890") // Second name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue("1234567890") // First name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue("1234567890") // Last name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue("1234567890") // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue("1234567890") // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // all but TNN fail
//     });

//     it('test #072', async () => {
//         // await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         // await $('/html/body/div/div/div/div/div/div/button').click();
//         // let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         // elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // Second name  
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // First name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // Last name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // all fail
//     });

//     it('test #073', async () => {
//         // await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         // await $('/html/body/div/div/div/div/div/div/button').click();
//         // let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         // elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('<script>alert("text"') </script>') // Second name  
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue('<script>alert("text"') </script>') // First name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('<script>alert("text"') </script>') // Last name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('<script>alert("text"') </script>') // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('<script>alert("text"') </script>') // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // all fail
//     });

//     it('test #074', async () => {
//         // await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         // await $('/html/body/div/div/div/div/div/div/button').click();
//         // let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         // elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('12345.6789') // Second name  
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue('12345.6789') // First name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('12345.6789') // Last name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('12345.6789') // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('12345.6789') // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // all fail
//     });

//     it('test #075', async () => {
//         // await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         // await $('/html/body/div/div/div/div/div/div/button').click();
//         // let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         // elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('0000000000') // Second name  
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue('0000000000') // First name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('0000000000') // Last name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('0000000000') // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('0000000000') // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // all but TNN fail
//     });

//     it('test #076', async () => {
//         // await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         // await $('/html/body/div/div/div/div/div/div/button').click();
//         // let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         // elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('1111111111') // Second name  
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue('1111111111') // First name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('1111111111') // Last name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('1111111111') // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('1111111111') // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // all but TNN fail
//     });

//     it('test #077', async () => {
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
//         elem.waitForValue(30000);
//         await $('/html/body/div/div/div/div/div/div/button').click();
//         await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('Manokhin') // Second name  
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue('Konstantin') // First name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('Vladimirovich') // Last name
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('1234567890') // TNN
//         await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('Russian Federation') // Citizenship
//         const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
//         const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
//         assert.strictEqual(isButtonDisabled, null); // all correct
//     });

//      it('test #078', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('') // Second name  
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue('e12') // First name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('emoji') // Last name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('Abracadabra') // TNN
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('1234567890') // Citizenship
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); 
    //   });


//      it('test #079', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('Abracadabra') // Second name  
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // First name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('<script>alert("text"') // Last name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('12345.6789') // TNN
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('0000000000') // Citizenship
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); 
    //   });

//      it('test #080', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('e12') // Second name  
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`1111111111`) // First name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('1234567890') // Last name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('"FOO'); DROP TABLE USERS"') // TNN
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('Abracadabra') // Citizenship
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); 
    //     });

    //  it('test #081', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('emoji') // Second name  
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`0000000000`) // First name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('e12') // Last name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('12345.6789') // TNN
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('<script>alert("text"') // Citizenship
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); 
    //     });

        //  it('test #082', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('1234567890') // Second name  
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // First name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('Abracadabra') // Last name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('1111111111') // TNN
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('emoji') // Citizenship
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); 
    //     });

        //  it('test #083', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('<script>alert("text"') // Second name  
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`12345.6789`) // First name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // Last name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('e12') // TNN
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('0000000000') // Citizenship
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); 
    //     });

        //  it('test #084', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('12345.6789') // Second name  
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`Abracadabra`) // First name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('0000000000') // Last name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('emoji') // TNN
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('1111111111') // Citizenship
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); 
    //     });

        //  it('test #085', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('0000000000') // Second name  
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`1234567890`) // First name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue('111111111111') // Last name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('<script>alert("text"') // TNN
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // Citizenship
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); 
    //     });

        //  it('test #086', async () => {
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/input').setValue("9217955889"); // empty string
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     let elem = $('/html/body/div/div/div/div/div/div/div[2]/div[2]').click(); // finish the auth button
    //     elem.waitForValue(30000);
    //     await $('/html/body/div/div/div/div/div/div/button').click();
    //     await $('/html/body/div/div/div/header/div[2]/div/div[1]/div/a[1]').click();
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[1]/div/input').setValue('1111111111') // Second name  
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[2]/div/input').setValue(`emoji`) // First name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[3]/div/input').setValue(`"FOO'); DROP TABLE USERS"`) // Last name
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[4]/div/input').setValue('0000000000') // TNN
    //     await $('/html/body/div/div/div/div/div/div/div[1]/div[5]/div/input').setValue('12345.6789') // Citizenship
    //     const sendCodeButton = await $('/html/body/div/div/div/div/div/div/button'); // Finish the verification button
    //     const isButtonDisabled = await sendCodeButton.getAttribute('disabled');
    //     assert.strictEqual(isButtonDisabled, null); 
    //     });
// });
