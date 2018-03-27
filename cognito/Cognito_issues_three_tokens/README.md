# Tokens with User Pools

This demo shows the real cognito three tokens in the aws document [Using Tokens with User Pools](https://amzn.to/2fo77UI). It also helps you to fully undertand how the payload looks like. 

## Preparation

* create cognito user pool. You can reference the serverless stack in [create_coginto_userpool](../create_coginto_userpool/serverless.yml)
* create at least one user in cognito user pool. If you want to create new user with command, reference `signup.sh`
* update user pool id and client id in `test.js`

## Usage

run 

    $ npm install; node test.js
    
    userData: {"Username":"bill","Pool":{"userPoolId":"....
    ===========================
    Result methods: idToken,refreshToken,accessToken,clockDrift
    idToken methods: jwtToken,payload
    accessToken methods: jwtToken,payload
    refreshToken methods: token
    ID token payload's method: sub,email_verified,gender,iss,phone_number_verified,cognito:username,given_name,aud,event_id,token_use,auth_time,phone_number,exp,iat,family_name,email
    user's mailbox: abc@example.com
    ===========================
    ID Token: eyJraWQiOiJoTxxxxVtZm1K5wZmIFA
    ===========================
    Access token: eyJraWQiOixxxxy5H5LaCQTw
    ===========================
    Refresh token: eyJjdHkiOixxxx8twwVe2CnDKMig

You should get three tokens: id token, access token and refresh token

ID token is the most useful token you need. 

I also added codes to show how to get these three token's methods and how to show the user's attributes, for example, his/her emailbox.
