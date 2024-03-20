const { assert } = require("chai");
const helpers = require("../runtime/helpers");
const { By } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");

module.exports = {
    ParabankPortal: 'https://parabank.parasoft.com/parabank/index.htm', // 'https://parabank.parasoft.com',
    elements : {
               // THESE ARE  ALL FOR LOGIN : 
        username: by.name('username'), //*[@id="loginPanel"]/form/div[1]/input',  
        password: by.name('password'), //*[@id="loginPanel"]/form/div[2]/input',
        LoginActionButton : '//*[@id="loginPanel"]/form/div[3]/input',
        AccountsOverview: '//*[@id="rightPanel"]/div/div/h1', 
        BankErrorMessage : '//*[@id="rightPanel"]/p',

                // THESE ARE ALL FOR FORGOT LOGIN INFO :
        ForgotLoginInfo : '//*[@id="loginPanel"]/p[1]/a',
        CustomerLookupHeader : '//*[@id="rightPanel"]/h1',
        FirstName1: by.name('firstName'), 
        LastName1: by.name('lastName'),
        Address1: by.name('address.street'),
        City1: by.name('address.city'),
        State1: by.name('address.state'),
        ZipCode1: by.name('address.zipCode'),
        SSN1: by.name('ssn'),
        FindMyLoginInfo : '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        ErrorMessageForNotfindingInfo : '//*[@id="rightPanel"]/h1',

            // THESE ARE ALL FOR TO REGISTER AS A CUSTOMER
        Register : '//*[@id="loginPanel"]/p[2]/a',
        SigningUpEasy : '//*[@id="rightPanel"]/h1',
        FirstName: by.name('customer.firstName'), 
        LastName: by.name('customer.lastName'),
        Address: by.name('customer.address.street'),
        City: by.name('customer.address.city'),
        State: by.name('customer.address.state'),
        ZipCode: by.name('customer.address.zipCode'),
        Phone: by.name('customer.phoneNumber'),
        SSN: by.name('customer.ssn'),
        UserName: by.name('customer.username'),
        Password: by.name('customer.password'),
        Confirm: by.name('repeatedPassword'),
        RegisterNewUser : '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        WelcomeMessage : '//*[@id="rightPanel"]/h1',

        // THESE ARE ALL FOR RAISING CUSTOMER CARE SUPPORT
        CustomerCareButton: '//*[@id="headerPanel"]/ul[2]/li[3]/a',
        CustomerCareHeader: '//*[@id="rightPanel"]/h1',
        SendToCustomerCareButton: '//*[@id="contactForm"]/table/tbody/tr[5]/td[2]/input',
        Name1: by.name('name'),
        Email1: by.name('email'),
        Phone1: by.name('phone'),
        Message1: by.name('message'),
        ThankYouMessage: '//*[@id="rightPanel"]/p[1]',

        // Open new account
        OpenNewAccount : '//*[@id="leftPanel"]/ul/li[1]/a',
        CheckingAccount : '//*[@id="type"]/option[1]',
        SavingsAccount : '//*[@id="type"]/option[2]',
        ExistingAccount1 : '//*[@id="fromAccountId"]/option[1]',
        ExistingAccount2 : '//*[@id="fromAccountId"]/option[2]',
        OpenNewAccountButton : '//*[@id="rightPanel"]/div/div/form/div/input',
        AccountOpenedMessage : '//*[@id="rightPanel"]/div/div/h1', 
        TypeOfAccount : '//*[@id="type"]',

        // Accounts Overview
        AccountsOverviewTab : '//*[@id="leftPanel"]/ul/li[2]/a',
        
        // Bill Pay
        BillPay : '//*[@id="leftPanel"]/ul/li[4]/a',
        BillPaymentServices : '//*[@id="rightPanel"]/div/div[1]/h1',
        SendPayment : '//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input',
        PayeeName : by.name('payee.name'), //'//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[1]/td[2]/input',
        PayeeAddress : by.name('payee.address.street'), // '//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[2]/td[2]/input',
        PayeeCity : by.name('payee.address.city'), //'//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[3]/td[2]/input',
        PayeeState : by.name('payee.address.state'), //'//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[4]/td[2]/input',
        PayeeZipCode : by.name('payee.address.zipCode'), //'//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[5]/td[2]/input',
        PayeePhone : by.name('payee.phoneNumber'), //'//*[@id="400dd540-f782-49c7-9693-24c50bae4907"]',
        PayeeAccount : by.name('payee.accountNumber'), //'//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[8]/td[2]/input',
        PayeeVerifyAccount : by.name('verifyAccount'), //'//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[9]/td[2]/input',
        PayeeAmount : by.name('amount'), //'//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[11]/td[2]/input',
        PayeeFromAccount : '//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[13]/td[2]/select',
            //'/html/body/div[1]/div[3]/div[2]/div/div[1]/form/table/tbody/tr[13]/td[2]/select',
            //'//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[13]/td[2]/select', // may be wrong
                    //*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[13]/td[2]/select/option
                    
        PaymentConfirmMessage : '//*[@id="rightPanel"]/div/div[2]/h1',
        
        // transfer
        WelcomeMessage: '//*[@id="leftPanel"]/p/b',
        TransferFunds: '//*[@id="leftPanel"]/ul/li[3]/a',
        AmountToTransfer: by.name('input'), // '//*[@id="amount"]', 
        //FromAccount : '//*[@id="fromAccountId"]/option[1]' ,
        FromAccount: '//*[@id="fromAccountId"]',
        //ToAccount :'//*[@id="toAccountId"]/option[2]',
        ToAccount :'//*[@id="toAccountId"]',
        TransferButton : '//*[@id="rightPanel"]/div/div/form/div[2]/input',
        TransferFundsPage : '//*[@id="rightPanel"]/div/div/h1' 

    },
    clickElement : async function(objectKey) {
        console.log(objectKey + " - entering into Click method");
        const selector = this.elements[objectKey];
        //console.log(selector);
        await driver.sleep(3000);
        console.log("Click Event of " + objectKey)
        return driver.findElement(By.xpath(selector)).click();
    },
    scrollToElement : async function(objectKey) {
        console.log("Account_Type" + objectKey);
        var selector = page.parabank.elements[objectKey];
        //var element = document.getElementById(objectKey);
        //console.log('Id of ' + objectKey + 'is : ' + element);
        console.log('selector= ' + selector)
        await driver.sleep(2000);
        //console.log(driver.findElement(By.xpath(selector)));
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
    },

    inputElement : async function(inputname,inputvalue) {
        console.log("Name = " + inputname);
        //const selector = this.elements[inputname];
        var selector = page.parabank.elements[inputname];
        console.log("inputvalue = " + inputvalue);
        await driver.sleep(2000);  
       // return driver.findElement(By.xpath(selector)).sendKeys(inputvalue);
        return driver.findElement(selector).sendKeys(inputvalue); 
       // return driver.findElement(By.name(inputname)).sendKeys(inputvalue);
    },

    elementExists : async function(objectKey){
        const selector = this.elements[objectKey];
        console.log(objectKey + " checking element existing or not");
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector));
    }
    
}

