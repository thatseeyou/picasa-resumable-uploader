import * as fs from 'fs';
import * as readline from 'readline';
import * as google from 'googleapis';
import googleAuth = require('google-auth-library');

// Made in https://console.developers.google.com
const CLIENT_SECRET_FILE = 'client_secret.json';
const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';
// cache for refresh_token & access_token
const TOKEN_PATH = TOKEN_DIR + 'googlephotos.json';

//----------------------------------------------------------------------------
// funciton declarations

// the schema of client_secret.json 
export interface ClientSecret {
  installed: {
    client_id: string,
    client_secret: string,
    redirect_uris: string[],
    auth_provider_x509_cert_url: string,
    auth_uri: string,
    project_id: string,
    token_uri: string
  }
}

export function readClientSecret() {
  return new Promise(function(resolve: (clientSecret: ClientSecret) => any, reject: (err: NodeJS.ErrnoException) => any) {
    fs.readFile(CLIENT_SECRET_FILE, 'utf8', function afterReadClientSecret(err: NodeJS.ErrnoException, content: string) {
      if (err) {
        console.error('Error loading client secret file: ' + err);
        reject(err);
        return;
      }
      // Authorize a client with the loaded credentials, then call the
      // Drive API.
      var clientSecret: ClientSecret = JSON.parse(content);
      resolve(clientSecret);
    });
  });
}

/**
 * Create an OAuth2 client with the given credentials
 *
 * @param {Object} credentials The authorization client credentials.
 */
export function createOAuth2Client(credentials: ClientSecret, scopes: string[]) {
  return new Promise(function(resolve: (oauth2Client: googleAuth.OAuth2) => any, reject: (err: any) => any) {
    var clientId = credentials.installed.client_id;
    var clientSecret = credentials.installed.client_secret;
    var redirectUrl = credentials.installed.redirect_uris[0];
    var oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);

    fs.readFile(TOKEN_PATH, 'utf8', function afterReadTokenFile(err: NodeJS.ErrnoException, token: string) {
      if (err) {
        // grant_type=authorization_code
        getNewToken(oauth2Client, scopes)
        .then(function (oauth2Client) {
          resolve(oauth2Client);
        }, function (err) {
          reject(err);
        });
      } else {
        oauth2Client.credentials = JSON.parse(token);
        let oldAccessToken = oauth2Client.credentials.access_token;
        oauth2Client.getAccessToken(function (err, access_token, response) {
          if (err) {
            reject(err);
          }
          else {
            // expired_date is checked in getAccessToken 
            if (oldAccessToken != access_token) {
              storeToken(oauth2Client.credentials);
            }
            resolve(oauth2Client);
          }
        });
      }
    });
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} runAuthorizedAPI The callback to call with the authorized
 *     client.
 */
export function getNewToken(oauth2Client: googleAuth.OAuth2, scopes: string[]) {
  return new Promise(function(resolve: (auth: googleAuth.OAuth2) => void, reject: (err: any) => void) {
    var authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes
    });
    console.error('Authorize this app by visiting this url: ', authUrl);
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stderr
    });
    rl.question('Enter the code from that page here: ', function (code) {
      rl.close();

      oauth2Client.getToken(code, function (err: any, token: googleAuth.TCredentials) {
        if (err) {
          console.error('Error while trying to retrieve access token', err);
          reject(err);
          return;
        }
        oauth2Client.credentials = token;
        storeToken(token);
        resolve(oauth2Client);
      });
    });
  });
}

/**
 * Store refresn token and access token to cache file for later use.
 *
 * @param {Object} token The token to store to disk.
 */
export function storeToken(token: googleAuth.TCredentials) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.error('Token stored to ' + TOKEN_PATH);
}
