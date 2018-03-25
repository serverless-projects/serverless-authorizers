# Tokens with User Pools

This demo shows the real three tokens in the aws document https://amzn.to/2fo77UI

## Preparation

* create cognito user pool. You can reference the serverless stack in [create_coginto_userpool](../create_coginto_userpool/serverless.yml)
* create at least one user in cognito user pool. If you want to create new user with command, reference `signup.sh`
* update user pool id and client id in `test.js`

## Usage

run 

    $ npm install; node test.js
    
    userData: {"Username":"bill","Pool":{"userPoolId":"....
    ===========================
    ID Token: eyJraWQiOiJoTxxxxVtZm1K5wZmIFA
    ===========================
    Access token: eyJraWQiOixxxxy5H5LaCQTw
    ===========================
    Refresh token: eyJjdHkiOixxxx8twwVe2CnDKMig

You should get three tokens: id token, access token and refresh token

ID token is the most useful token you need. 

For example, with this ID token, you can play around with [API Gateway Authorizer Function for Auth0 or AWS Cognito using the JWKS method](https://github.com/serverless/examples/tree/master/aws-node-auth0-cognito-custom-authorizers-api)

I also added codes to show how to get these three token's methods and how to show the user's attributes, for example, his/her emailbox.
