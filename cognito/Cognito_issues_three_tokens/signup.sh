# replace client-id with real id.
aws cognito-idp sign-up \
--client-id 3rt7eviusld6qfiaexxxxxxxxx \
--username bill \
--password P@ssw0rd \
--region ap-southeast-2 \
--user-attributes '[{"Name":"given_name","Value":"Bill"},{"Name":"family_name","Value":"W"},{"Name":"email","Value":"xxxx@gmail.com"},{"Name":"gender","Value":"Male"},{"Name":"phone_number","Value":"+88888888"}]'

