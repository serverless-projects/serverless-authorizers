# Serverless Authorizer
Example of a service that uses API Gateway custom authorizer feature to authorize your endpoints with REQUEST type

## Usage

```
cd serverless-authorizer/request_type
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
