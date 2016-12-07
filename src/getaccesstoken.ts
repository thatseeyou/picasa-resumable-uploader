#!/usr/bin/env node
import * as google from 'googleapis';
import googleAuth = require('google-auth-library');

import { readClientSecret, createOAuth2Client } from './oauth2';

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/googlephotos.json
const SCOPES = [
  'https://picasaweb.google.com/data/'
];

readClientSecret()
  .then(function resolve(clientSecret) {
    return createOAuth2Client(clientSecret, SCOPES);
  }, function reject(reason) {
    return Promise.reject(reason);
  })
  .then(function resolve(auth) {
    console.log(auth.credentials.access_token);
  }, function reject(reason) {
    console.error(reason);
  });
