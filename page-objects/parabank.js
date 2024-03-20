
const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    parabank: 'https://parabank.parasoft.com/parabank/index.htm',


    elements: {
        registerLink: '//*[@id="loginPanel"]/p[2]/a',
        signupPage: '//*[@id="rightPanel"]/h1',
        firstName: by.name('customer.firstName'),
        lastName: by.name('customer.lastName'),
        address: by.name('customer.address.street'),
        city: by.name('customer.address.city'),
        state: by.name('customer.address.state'),
        zipCode: by.name('customer.address.zipCode'),
        phoneNo: by.name('customer.phoneNumber'),
        ssnNumber: by.name('customer.ssn'),
        userName: by.name('customer.username'),
        password: by.name('customer.password'),
        confirmPw: by.name('repeatedPassword'),
        registerButton: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        welcomePage: '//*[@id="rightPanel"]/h1',

        CustomerLoginHeader: '//*[@id="leftPanel"]/h2',
        cusUserName: by.name('username'),
        cusPassword: by.name('password'),
        loginButton: '//*[@id="loginPanel"]/form/div[3]/input',
        CustomerPage: '//*[@id="rightPanel"]/div/div/h1',

        forgotloginButton: '//*[@id="loginPanel"]/p[1]/a',
        CustomerLookupHeader: '//*[@id="rightPanel"]/h1',
        flfirstName: by.name('firstName'),
        fllastName: by.name('lastName'),
        fladdress: by.name('address.street'),
        flcity: by.name('address.city'),
        flstate: by.name('address.state'),
        flzipCode: by.name('address.zipCode'),
        flssnNumber: by.name('ssn'),
        findLoginInfoButton: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        loginInfoDetails: '//*[@id="rightPanel"]/p[1]',


        customerCareButton: '//*[@id="headerPanel"]/ul[2]/li[3]/a',
        customerCarePage: '//*[@id="rightPanel"]/h1',
        ccName: by.name('name'),
        ccEmail: by.name('email'),
        ccPhone: by.name('phone'),
        ccMessage: by.name('message'),
        sendToCuscareButton: '//*[@id="contactForm"]/table/tbody/tr[5]/td[2]/input',
        thankYouRepPage: '//*[@id="rightPanel"]/p[1]',
        customerCareButton: '//*[@id="headerPanel"]/ul[2]/li[3]/a',
        customerCarePage: '//*[@id="rightPanel"]/h1',

        aboutUsButton: '//*[@id="headerPanel"]/ul[1]/li[2]/a',
        demoWebsite: '//*[@id="rightPanel"]/h1',

        servicesButton: '//*[@id="headerPanel"]/ul[1]/li[3]/a',
        availServicePage: '//*[@id="rightPanel"]/span[1]',

        productsButton: '//*[@id="headerPanel"]/ul[1]/li[4]/a',
        parasoftPage: '//*[@id="main"]/section[2]/div[2]/div/div/div[1]',

        locationButton: '//*[@id="headerPanel"]/ul[1]/li[5]/a',
        paraLocationPage: '//*[@id="main"]/section[2]/div[2]/div/div/div',

        adminPageButton: '//*[@id="headerPanel"]/ul[1]/li[6]/a',
        paraAdminPage: '//*[@id="rightPanel"]/h1',


        transferFunds: '//*[@id="leftPanel"]/ul/li[3]/a',
        fundAmount: by.name('input'),
        '17895Account': '//*[@id="fromAccountId"]/option[2]',
        transferButton: '//*[@id="rightPanel"]/div/div/form/div[2]/input',
        transferCompletePage: '//*[@id="rightPanel"]/div/div/h1',

        openNewAccount: '//*[@id="leftPanel"]/ul/li[1]/a',
        savingsAccOption: '//*[@id="type"]/option[2]',
        createNewAcc: '//*[@id="rightPanel"]/div/div/form/div/input',
        accountOpenedPage: '//*[@id="rightPanel"]/div/div/p[1]',

        accOverviewButton: '//*[@id="leftPanel"]/ul/li[2]/a',
        accountOverviewPage: '//*[@id="rightPanel"]/div/div/h1',
        accdetailsof27330: '//*[@id="accountTable"]/tbody/tr[1]/td[1]/a',
        accountDetailsPage: '//*[@id="rightPanel"]/div/div[1]/h1',
        activityPeriodOption: '//*[@id="month"]/option[4]',
        activityType: '//*[@id="transactionType"]/option[2]',
        goButton: '//*[@id="rightPanel"]/div/div[2]/form/table/tbody/tr[3]/td[2]/input',
        transactionDetailsList: '//*[@id="transactionTable"]',
        ftReceivedButton: '//*[@id="transactionTable"]/tbody/tr[1]/td[2]/a',
        transactionDetailsPage: '//*[@id="rightPanel"]/h1',

        billPayButton: '//*[@id="leftPanel"]/ul/li[4]/a',
        billPaymentServicePage: '//*[@id="rightPanel"]/div/div[1]/h1',
        payeeName: by.name('payee.name'),
        payeeAddress: by.name('payee.address.street'),
        payeeCity: by.name('payee.address.city'),
        payeeState: by.name('payee.address.state'),
        payeeZipcode: by.name('payee.address.zipCode'),
        payeePhone: by.name('payee.phoneNumber'),
        payeeAccount: by.name('payee.accountNumber'),
        payeeVerifyAccount: by.name('verifyAccount'),
        payeeAmount: by.name('amount'),
        senPaymentButton: '//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input',
        billPayCompletePage: '//*[@id="rightPanel"]/div/div[2]/h1',



        updateInfoButton: '//*[@id="leftPanel"]/ul/li[6]/a',
        updateProfilePage: '//*[@id="rightPanel"]/div/div/h1',
        profileFirstName: by.name('customer.firstName'),
        profileLastName: by.name('customer.lastName'),
        profileAddress: by.name('customer.address.street'),
        profileCity: by.name('customer.address.city'),
        profileState: by.name('customer.address.state'),
        profileZipcode: by.name('customer.address.zipcode'),
        profilePhone: by.name('customer.phoneNumber'),
        updateProfileButton: '//*[@id="rightPanel"]/div/div/form/table/tbody/tr[8]/td[2]/input',
        profileUpdatedPage: '//*[@id="rightPanel"]/div/div/h1',

        requestLoanButton: '//*[@id="leftPanel"]/ul/li[7]/a',
        applyLoanPage: '//*[@id="rightPanel"]/div/div/h1',
        loanAmount: by.id('amount'),
        downPayment: by.id('downPayment'),
        applyNowButton: '//*[@id="rightPanel"]/div/div/form/table/tbody/tr[4]/td[2]/input',
        loanApprovedPage: '//*[@id="loanProviderName"]',

    },
    clickElement: async function (objectKey) {
        const selector = this.elements[objectKey];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click();
    },

    inputElement: async function (inputname, inputvalue) {
        console.log('inputname= ' + inputname)
        console.log('inputvalue= ' + inputvalue)
        const selector = this.elements[inputname];

        console.log('inputname= ' + inputname)
        await driver.sleep(3000);
        return driver.findElement(selector).sendKeys(inputvalue);
    },

    elementExists: async function (objectKey) {
        const selector = this.elements[objectKey];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector));
    },

}
