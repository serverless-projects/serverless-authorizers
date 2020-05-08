# Serverless Authorizer
Example of a service that uses API Gateway api-key feature to authorize your endpoints

## Usage

```
$ cd serverless-authorizers/api_key
$ npm install
$ serverless deploy

Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (3.89 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................^@..............................................................................
Serverless: Stack update finished...
Service Information
service: serverless-rest-api-with-dynamodb
stage: dev
region: us-east-1
stack: serverless-rest-api-with-dynamodb-dev
api keys:
  serverless-rest-api-with-dynamodb-dev-api-key: BgSIOQeI0C5rCU1WUkTDB4lG506LSeFCuXVpV653
endpoints:
  POST - https://c7vrnckca1.execute-api.us-east-1.amazonaws.com/dev/todos
  GET - https://c7vrnckca1.execute-api.us-east-1.amazonaws.com/dev/todos
  GET - https://c7vrnckca1.execute-api.us-east-1.amazonaws.com/dev/todos/{id}
  PUT - https://c7vrnckca1.execute-api.us-east-1.amazonaws.com/dev/todos/{id}
  DELETE - https://c7vrnckca1.execute-api.us-east-1.amazonaws.com/dev/todos/{id}
functions:
  create: serverless-rest-api-with-dynamodb-dev-create
  list: serverless-rest-api-with-dynamodb-dev-list
  get: serverless-rest-api-with-dynamodb-dev-get
  update: serverless-rest-api-with-dynamodb-dev-update
  delete: serverless-rest-api-with-dynamodb-dev-delete

# Notice the displayed api hash key.

$ curl https://c7vrnckca1.execute-api.us-east-1.amazonaws.com/dev/todos
{"message":"Forbidden"}

$ curl --header "x-api-key: BgSIOQeI0C5rCU1WUkTDB4lG506LSeFCuXVpV653" https://c7vrnckca1.execute-api.us-east-1.amazonaws.com/dev/todos
[]

$ curl -X POST --header "x-api-key: BgSIOQeI0C5rCU1WUkTDB4lG506LSeFCuXVpV653" https://c7vrnckca1.execute-api.us-east-1.amazonaws.com/dev/todos --data '{ "text": "Learn Serverless" }'

{"id":"770f1000-90ce-11ea-a1cd-6d8107cbbbd5","text":"Learn Serverless","checked":false,"createdAt":1588902702335,"updatedAt":1588902702335}

$ serverless logs -f list # see the logs with event details

$ serverless remove # remove the whole stack
```

## references:

https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb

https://github.com/serverless-lambda/serverless-web-monitor/blob/master/serverless.yml
