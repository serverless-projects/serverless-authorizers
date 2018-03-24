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
        UserPoolId: 'ap-southeast-2_XPY69XXXX',
        ClientId: '3rt7eviusld6qfiaexxxxxxxxx'
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
            // Amazon Cognito issues three tokens to the client
            // https://amzn.to/2fo77UI
            /*Use the idToken for Logins Map when Federating User Pools with Cognito Identity or when passing through an Authorization Header to an API Gateway Authorizer*/
            console.log("===========================");
            // console.log('ID Token: ' + result.idToken.jwtToken);
            console.log('ID token: ' + result.getIdToken().getJwtToken());
            console.log("===========================");
            console.log('Access token: ' + result.getAccessToken().getJwtToken());
            console.log("===========================");
            console.log('Refresh token: ' + result.refreshToken.getToken());

        },

        onFailure: function(err) {
            alert(err);
        },

    });
}
this.test();
