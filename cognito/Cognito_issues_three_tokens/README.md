# Tokens with User Pools

This demo shows the real three tokens in the aws document https://amzn.to/2fo77UI

## Preparation

* create cognito user pool
* create a user in cognito user pool. If you want to create new user with command, reference `signup.sh`
* update user pool id and client id in test.js

## Usage

run 

    npm install; node test.js

You should get three tokens: id token, access token and refresh token
