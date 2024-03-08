const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://prod.idp.collegeboard.org/',

    elements: {
        signInButton: //*[@id="block-cborghomepage"]/div/div[1]/div[3]/div/div[2]/div/div/a,
        StudentButton: //*[@id="form82"]/div[1]/div[2]/div[2]/div/span/div/label,
        emailAddress: //*[@id="idp-discovery-username"],
        RememberEmailAddress: //*[@id="form82"]/div[1]/div[2]/div[2]/div/span/div/label,
        NextBtn: //*[@id="idp-discovery-submit"],
        errorMessage: //*[@id="form82"]/div[1]/div[1]/div/div/p,
        
    },

    
};