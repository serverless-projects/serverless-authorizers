# Serverless Authorizer
Example of a service that uses API Gateway custom authorizer feature to authorize your endpoints with TOKEN type

## Usage

```
cd serverless-authorizers/token_type
serverless deploy

# Notice the displayed endpoint after deployment
url=<endpoint>
curl --header "Authorization: allow" ${url} # Should work! Authorized!
curl --header "Authorization: deny" ${url} # Should not work
curl --header "Authorization: unauthorized" ${url} # Should not work
curl --header "Authorization: blabla" ${url} # Should not work
curl ${url} # Should not work

sls logs -f auth # see the logs with event details

sls remove # remove the whole stack
```

## Notes

For a TOKEN authorizer, identitySource is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is `Auth`, the header mapping expression is `method.request.header.Auth`.

Refer: 

[Authorizer identitySource](https://docs.aws.amazon.com/apigateway/api-reference/resource/authorizer/#identitySource)
