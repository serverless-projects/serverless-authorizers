# Tokens with User Pools

This demo shows the real three tokens in the aws document https://amzn.to/2fo77UI

## Preparation

* create cognito user pool
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
