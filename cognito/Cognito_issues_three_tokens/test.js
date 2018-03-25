const AWS = require("aws-sdk");
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
//const AmazonCognitoIdentity=require("amazon-cognito-identity-js-node");

module.exports.test = () => {
    var authenticationData = {
        Username: 'bill',
        Password: 'P@ssw0rd',
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    var poolData = {
        UserPoolId: 'ap-southeast-2_XPYXXXXXX',
        ClientId: '3rt7eviusld6qfiaeXXXXXXXXX'
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
        Username: 'bill',
        Pool: userPool
    };
    console.log("userData:", JSON.stringify(userData));

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            console.log("===========================");
            // Result methods: idToken,refreshToken,accessToken,clockDrift
            console.log('Result methods: ' + Object.getOwnPropertyNames(result));
            // idToken methods: jwtToken,payload
            console.log('idToken methods: ' + Object.getOwnPropertyNames(result.idToken));
            // accessToken methods: jwtToken,payload
            console.log('accessToken methods: ' + Object.getOwnPropertyNames(result.accessToken));
            // refreshToken methods: token
            console.log('refreshToken methods: ' + Object.getOwnPropertyNames(result.refreshToken));
            // ID token payload's method: sub,email_verified,gender,iss,phone_number_verified,cognito:username,given_name,aud,event_id,token_use,auth_time,phone_number,exp,iat,family_name,email
            console.log("ID token payload's method: " + Object.getOwnPropertyNames(result.idToken.payload));
            // show the code on how to get cognito user's attribute, for example, its emailbox
            console.log("user's mailbox: " + result.idToken.payload.email);
            // Amazon Cognito issues three tokens to the client
            // https://amzn.to/2fo77UI
            /*Use the idToken for Logins Map when Federating User Pools with Cognito Identity or when passing through an Authorization Header to an API Gateway Authorizer*/
            console.log("===========================");
            console.log('ID token: ' + result.idToken.jwtToken);
            //console.log('ID token: ' + result.getIdToken().getJwtToken());
            console.log("===========================");
            console.log('Access token: ' + result.accessToken.jwtToken);
            //console.log('Access token: ' + result.getAccessToken().getJwtToken());
            console.log("===========================");
            console.log('Refresh token: ' + result.refreshToken.token);
            //console.log('Refresh token: ' + result.refreshToken.getToken());

        },

        onFailure: function(err) {
            alert(err);
        },

    });
}
this.test();
