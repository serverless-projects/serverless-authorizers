# Serverless Authorizer
Example of a service that uses API Gateway custom authorizer feature to authorize your endpoints with REQUEST type

## Usage

```
cd serverless-authorizers/request_type
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

For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an **Auth** header, a **Name** query string parameter are defined as identity sources, this value is **method.request.header.Auth, method.request.querystring.Name**. These parameters will be used to derive the authorization caching key and to perform runtime validation of the **REQUEST** authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.

Refer:

[Request Authorizer identitySource](https://docs.aws.amazon.com/apigateway/api-reference/resource/authorizer/#identitySource)
