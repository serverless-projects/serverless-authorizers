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

The identitySource doesn't have to be Authorization. You can define any header.

    identitySource: method.request.header.Custom
