# Setup
* Clone repository
* Run `npm install`
* Run `DEBUG=myapp:* npm start` to start server

# To test SSO
1. Add the SAML response we expect from the IDP here https://github.com/braymon-storypark/sso-test/blob/main/views/index.jade#L11
2. Update the URL to point to your local Rails server if needed: https://github.com/braymon-storypark/sso-test/blob/main/views/index.jade#L9
3. Go to `localhost:4000` (or whichever port the server is running)
4. Click on the "Sign in with SSO" button which will redirect you to the Rails server
