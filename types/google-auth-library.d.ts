// Type definitions for INSERT PROJECT NAME HERE
// Project: http://example.com/THE_PROJECT_WEBSITE
// Definitions by: Your Name <YOUR_GITHUB_PROFILE_OR_EMAIL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Definition file started by dts-gen

/// <reference types="node" />
import http = require('http');

export = google_auth_library;
declare class google_auth_library {
    constructor();
    Compute: typeof google_auth_library.Compute;
    IAMAuth: typeof google_auth_library.IAMAuth;
    JWT: typeof google_auth_library.JWT
    JWTAccess: typeof google_auth_library.JWTAccess;
    OAuth2: typeof google_auth_library.OAuth2;
    UserRefreshClient: typeof google_auth_library.UserRefreshClient;
    fromJSON(json: any, opt_callback: any): void;
    fromStream(stream: any, opt_callback: any): void;
    getApplicationDefault(opt_callback: any): void;
    getDefaultProjectId(opt_callback: any): void;
}

declare namespace google_auth_library {
    export class Compute {
        constructor();
        createScopedRequired(): any;
        refreshToken_(ignored_: any, opt_callback: any): void;
        static GOOGLE_OAUTH2_TOKEN_URL_: string;
    }
    export class ComputeClient {
        constructor();
        createScopedRequired(): any;
        refreshToken_(ignored_: any, opt_callback: any): void;
        static GOOGLE_OAUTH2_TOKEN_URL_: string;
    }
    export class IAMAuth {
        constructor(selector: any, token: any);
        createScopedRequired(): any;
        getRequestMetadata(unused_uri_: any, metadataFn: any): void;
    }
    export class JWT {
        constructor(email: any, keyFile: any, key: any, scopes: any, subject: any);
        authorize(opt_callback: any): void;
        createScoped(scopes: any): any;
        createScopedRequired(): any;
        fromJSON(json: any, opt_callback: any): void;
        fromStream(stream: any, opt_callback: any): void;
        getRequestMetadata(opt_uri: any, metadataCb: any): any;
        refreshToken_(ignored_: any, opt_callback: any): any;
    }
    export class JWTAccess {
        constructor(email: any, key: any);
        createScopedRequired(): any;
        fromJSON(json: any, opt_callback: any): void;
        fromStream(stream: any, opt_callback: any): void;
        getRequestMetadata(authURI: any, metadataCb: any): any;
    }
    export class JWTClient {
        constructor(email: any, keyFile: any, key: any, scopes: any, subject: any);
        authorize(opt_callback: any): void;
        createScoped(scopes: any): any;
        createScopedRequired(): any;
        fromJSON(json: any, opt_callback: any): void;
        fromStream(stream: any, opt_callback: any): void;
        getRequestMetadata(opt_uri: any, metadataCb: any): any;
        refreshToken_(ignored_: any, opt_callback: any): any;
    }
    export class OAuth2 {
        credentials: TCredentials;
        constructor(clientId: string, clientSecret: string, redirectUri: string, opt_opts?: any);
        decodeBase64(b64String: any): any;
        generateAuthUrl(opt_opts?: {
            access_type?: string;
            response_type?: string;
            client_id?: string;
            redirect_uri?: string;
            scope: string | string[];
        }): string;
        getAccessToken(callback: (err: Error, access_token: string, respoose?: http.IncomingMessage) => void): any;
        getFederatedSignonCerts(callback: any): void;
        getRequestMetadata(opt_uri: any, metadataCb: any): any;
        getToken(
            code: string,
            opt_callback?: (
                err: Error,
                tokens: TCredentials,
                response: http.IncomingMessage
            ) => void
        ): void;
        refreshAccessToken(callback: (err: Error, tokens: TCredentials, respoose: http.IncomingMessage) => void): any;
        refreshToken_(refresh_token: any, opt_callback: any): any;
        request(opts: any, callback: any): any;
        revokeCredentials(callback: any): void;
        revokeToken(token: any, opt_callback: any): void;
        verifyIdToken(idToken: any, audience: any, callback: any): void;
        verifySignedJwtWithCerts(jwt: any, certs: any, requiredAudience: any, issuers: any, maxExpiry: any): any;
        static CLOCK_SKEW_SECS_: number;
        static GOOGLE_OAUTH2_AUTH_BASE_URL_: string;
        static GOOGLE_OAUTH2_FEDERATED_SIGNON_CERTS_URL_: string;
        static GOOGLE_OAUTH2_REVOKE_URL_: string;
        static GOOGLE_OAUTH2_TOKEN_URL_: string;
        static ISSUERS_: string[];
        static MAX_TOKEN_LIFETIME_SECS_: number;
    }
    export class UserRefreshClient {
        constructor(clientId: any, clientSecret: any, refreshToken: any);
        fromJSON(json: any, opt_callback: any): void;
        fromStream(stream: any, opt_callback: any): void;
        refreshToken_(ignored_: any, opt_callback: any): void;
    }

    export interface TCredentials {
        token_type: string;
        access_token: string;
        refresh_token: string;
        expiry_date: number;
        expires_in: number;
        [propName: string]: any;
    }
}
