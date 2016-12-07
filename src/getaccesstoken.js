#!/usr/bin/env node
"use strict";
const oauth2_1 = require('./oauth2');
// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/googlephotos.json
const SCOPES = [
    'https://picasaweb.google.com/data/'
];
oauth2_1.readClientSecret()
    .then(function resolve(clientSecret) {
    return oauth2_1.createOAuth2Client(clientSecret, SCOPES);
}, function reject(reason) {
    return Promise.reject(reason);
})
    .then(function resolve(auth) {
    console.log(auth.credentials.access_token);
}, function reject(reason) {
    console.error(reason);

    process.exit(1);
});
//# sourceMappingURL=getaccesstoken.js.map