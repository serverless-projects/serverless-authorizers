# NOTE: This was a demo for managing cognito userpool with serverless framework

If you are wondering what you need to do client side, check out https://github.com/aws/amazon-cognito-identity-js

# Serverless Test

This testing assume that you have default AWS credentials set up in ~/.aws or
you are running on an EC2 instance with an EC2 role with the appropriate
permissions.

# Testing

## Create the pool

First you need to create a userpool
```
cd cognito/manage-cognito-userpool
sls deploy
sls info
```

this will output the ARN
```
UserPoolIdARN: arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_wwmLDkcmm
```

## Bring up the stack

```
cd coginto/cognito-custom-authorizer
sls deploy
```

## Verify

* Browse to https://console.aws.amazon.com/apigateway/home?region=us-east-1#/apis
* Click on *serverless-cognito-userpool*
* Click on *Authorizers*
* You should see an authorizer configured as per ![Authorizer](images/authorizer.png)
* Click on *Resources*
* Click on */hello*
* You should see the method is protected by the cognito pool as per ![Pool](images/method.png)

## Cleanup

Bring down the stacks
```
sls remove
```
