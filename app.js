const xmlContent = `
<samlp:Response ID="_feaedb5a-82e2-4b8d-867e-1107cf601c37" Version="2.0" IssueInstant="2025-02-17T17:17:43.258Z" Destination="https://staging-au.storypark.com/users/sso_sign_in" InResponseTo="_47ed12d0-1bf0-4b55-a041-c3a160dafab6" xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
  <Issuer xmlns="urn:oasis:names:tc:SAML:2.0:assertion">
    https://sts.windows.net/e1f0acb3-afc5-41f1-a357-95d2bd46849f/
  </Issuer>
  <samlp:Status>
    <samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"/>
  </samlp:Status>
  <Assertion ID="_72eadd98-c98f-4980-98c0-1c35f7412400" IssueInstant="2025-02-17T17:17:43.255Z" Version="2.0" xmlns="urn:oasis:names:tc:SAML:2.0:assertion">
    <Issuer>https://sts.windows.net/e1f0acb3-afc5-41f1-a357-95d2bd46849f/</Issuer>
    <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
      <SignedInfo>
        <CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
        <SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/>
        <Reference URI="#_72eadd98-c98f-4980-98c0-1c35f7412400">
          <Transforms>
            <Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
            <Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
          </Transforms>
          <DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
          <DigestValue>EjFViHGJGbyHYBhAlamVgB1n4J88NAsAapWtpJpEVss=</DigestValue>
        </Reference>
      </SignedInfo>
      <SignatureValue>
        YEG0hgrBYOgcZPJ+nRxxTivCQR7IXT5JfZLHxcFssPYFuye54zR6DLyW8qZq513YtVXIEZU7/hSRnJw4spFp5KEZEYVHMQMZYyopAa7FVpU/83hLy8zlJeq7Uarqn1yGcI1Diy6UOnlxF4USt8FUpGZi3iRh6/tRIGBIo3pbV5f9Uw248RQs52AUMYQJ94l3QU5UZYcNHGNLs5M8TZZg9UE/p2w5R9qQtFfwi1uJHG/ZjcKXXOf6q0c4U6Pj0YSnn9pmSTDcG6aLWMhigAaAaV/oj9urxt6T3U2tHODrSu5ebqRpOdZNC7aYf1mRFVky9DM2OSGxroAhk12lGrTStg==
      </SignatureValue>
      <KeyInfo>
        <X509Data>
          <X509Certificate>
            MIIC8DCCAdigAwIBAgIQNex31/g5q65AF/TG1UloBTANBgkqhkiG9w0BAQsFADA0MTIwMAYDVQQDEylNaWNyb3NvZnQgQXp1cmUgRmVkZXJhdGVkIFNTTyBDZXJ0aWZpY2F0ZTAeFw0yNTAyMDIyMTE2MjBaFw0yODAyMDIyMTE2MTlaMDQxMjAwBgNVBAMTKU1pY3Jvc29mdCBBenVyZSBGZWRlcmF0ZWQgU1NPIENlcnRpZmljYXRlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3qp+gXVXTslgEM7HtvaQLGrhyzGIYDi159wxU901PoDto5nGcwTWTEVw5nLYH+5jOFxGl9t9oHjpIJgNltDdI2OY4nQNNmvOmbJ3vvOd8KNl3kV9QZC6F8P6So0PTh0ENlOa5xU1lZQi969aX7w3F2vz02H/fyr0UuYOY288dRxP0hcECk+YwoJFo4OmrkwKAJc26R76xgDI60ClqOUX+6SfQNd8FHJjA1wZ/RzISsj99QW1y6D8xaWaZCIjC5beBds1p0znyOJvp0IdEHDmZDaDAJ+4/2Xqb+J2ryA4bpIX/ol5TROru6ZL4XyQMyFSSKEbI3BLa9PT1nvI0yRIqQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQBT+LYdaACAeN8qOpLSgSHdkW2WGye4I0lKSvWU8UyOO4yvV5ubFEQNF1mqtchNvr2W4TPt8TzJDd3vJ293cImSq1/v0KgLyvUcvC/GuRL5v8tsHoIfxAO0Lvcsxn3bR8/nPEp5iZaQe286JYDKvaqupZgxuP97sb1Pyqp1BToDjh37YY91DDTnhFBcmeYOO5jADP0EDoNcMpjZ//F++7ePj6EoCEe0tTiJ3+kIoinykYweF+Mu63Z/0MU3w9R+H9j11SY3sylCP2UNL4FFlGkZsEg6vF+6TzsM+XGs+/Ba1w5BtnBqvhijeFz0Vu53U2sJUkFEc6HYkFchQvAZqFes
          </X509Certificate>
        </X509Data>
      </KeyInfo>
    </Signature>
    <Subject>
      <NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">braymon+addons.test@storypark.com</NameID>
      <SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
        <SubjectConfirmationData InResponseTo="_47ed12d0-1bf0-4b55-a041-c3a160dafab6" NotOnOrAfter="2025-02-17T18:17:43.109Z" Recipient="https://staging-au.storypark.com/users/sso_sign_in"/>
      </SubjectConfirmation>
    </Subject>
    <Conditions NotBefore="2025-02-17T17:12:43.109Z" NotOnOrAfter="2025-02-17T18:17:43.109Z">
      <AudienceRestriction>
        <Audience>Test-StoryPark</Audience>
      </AudienceRestriction>
    </Conditions>
    <AttributeStatement>
      <Attribute Name="http://schemas.microsoft.com/identity/claims/tenantid">
        <AttributeValue>e1f0acb3-afc5-41f1-a357-95d2bd46849f</AttributeValue>
      </Attribute>
      <Attribute Name="http://schemas.microsoft.com/identity/claims/objectidentifier">
        <AttributeValue>de914c3f-064f-4daa-a86c-461b8df1502f</AttributeValue>
      </Attribute>
      <Attribute Name="http://schemas.microsoft.com/identity/claims/displayname">
        <AttributeValue>TESTStoryPark</AttributeValue>
      </Attribute>
      <Attribute Name="http://schemas.microsoft.com/identity/claims/identityprovider">
        <AttributeValue>https://sts.windows.net/e1f0acb3-afc5-41f1-a357-95d2bd46849f/</AttributeValue>
      </Attribute>
      <Attribute Name="http://schemas.microsoft.com/claims/authnmethodsreferences">
        <AttributeValue>http://schemas.microsoft.com/ws/2008/06/identity/authenticationmethod/password</AttributeValue>
      </Attribute>
      <Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname">
        <AttributeValue>TESTStoryPark</AttributeValue>
      </Attribute>
      <Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname">
        <AttributeValue>TESTStoryPark</AttributeValue>
      </Attribute>
      <Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress">
        <AttributeValue>braymon+addons.test@storypark.com</AttributeValue>
      </Attribute>
      <Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name">
        <AttributeValue>braymon+addons.test@storypark.com</AttributeValue>
      </Attribute>
    </AttributeStatement>
    <AuthnStatement AuthnInstant="2025-02-17T17:17:43.223Z" SessionIndex="_72eadd98-c98f-4980-98c0-1c35f7412400">
      <AuthnContext>
        <AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:Password</AuthnContextClassRef>
      </AuthnContext>
    </AuthnStatement>
  </Assertion>
</samlp:Response>

`

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.post('/signup', async (req, res, next) => {
//   console.log("going here!", xmlContent);
//   res.redirect(307, "http://localhost:3000/users/sso_sign_in");
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
