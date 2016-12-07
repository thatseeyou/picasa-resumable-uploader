// Type definitions for INSERT PROJECT NAME HERE
// Project: http://example.com/THE_PROJECT_WEBSITE
// Definitions by: Your Name <YOUR_GITHUB_PROFILE_OR_EMAIL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Definition file started by dts-gen

import request = require('request');
import http = require('http');
import googleAuth = require('google-auth-library');

export class GoogleApis {
    constructor(options: any);
    addAPIs(apis: any): void;
    discover(url: any, callback: any): any;
    discoverAPI(path: any, options: any, callback: any): any;
    options(options: any): void;
}
export var auth: googleAuth;

type ServiceName = 'acceleratedmobilepageurl' | 
    'adexchangebuyer' | 
    'adexchangebuyer2' |
    'adexchangeseller' |
    'admin' |
    'adsense' |
    'adsensehost' |
    'analytics' |
    'analyticsreporting' |
    'androidenterprise' |
    'androidpublisher' |
    'appsactivity' |
    'appstate' |
    'bigquery' |
    'blogger' |
    'books' |
    'calendar' |
    'civicinfo' |
    'cloudbuild' |
    'clouderrorreporting' |
    'cloudmonitoring' |
    'clouduseraccounts' |
    'compute' |
    'consumersurveys' |
    'content' |
    'customsearch' |
    'datastore' |
    'deploymentmanager' |
    'dfareporting' |
    'discovery' |
    'dns' |
    'doubleclickbidmanager' |
    'doubleclicksearch' |
    'drive' |
    'firebasedynamiclinks' |
    'firebaserules' |
    'fitness' |
    'fusiontables' |
    'games' |
    'gamesConfiguration' |
    'gamesManagement' |
    'gmail' |
    'groupsmigration' |
    'groupssettings' |
    'appengine' |
    'classroom' |
    'cloudbilling' |
    'clouddebugger' |
    'cloudresourcemanager' |
    'cloudtrace' |
    'container' |
    'dataflow' |
    'dataproc' |
    'genomics' |
    'iam' |
    'kgsearch' |
    'partners' |
    'people' |
    'playmoviespartner' |
    'proximitybeacon' |
    'pubsub' |
    'safebrowsing' |
    'script' |
    'storagetransfer' |
    'youtubereporting' |
    'identitytoolkit' |
    'language' |
    'licensing' |
    'logging' |
    'manufacturers' |
    'mirror' |
    'ml' |
    'monitoring' |
    'oauth2' |
    'pagespeedonline' |
    'plus' |
    'plusDomains' |
    'prediction' |
    'qpxExpress' |
    'replicapool' |
    'replicapoolupdater' |
    'reseller' |
    'resourceviews' |
    'runtimeconfig' |
    'servicecontrol' |
    'servicemanagement' |
    'sheets' |
    'siteVerification' |
    'slides' |
    'spectrum' |
    'speech' |
    'sqladmin' |
    'storage' |
    'surveys' |
    'tagmanager' |
    'taskqueue' |
    'tasks' |
    'toolresults' |
    'translate' |
    'urlshortener' |
    'vision' |
    'webfonts' |
    'webmasters' |
    'youtube' |
    'youtubeAnalytics'; 

interface TServiceOptions extends RequestOptions {
    version?: string;
    auth?: googleAuth.OAuth2;
    params?: CommonParams;
}
type ServiceOptions = string | TServiceOptions;

interface RequestCallback {
    (error: any, body:any, response: http.IncomingMessage): void;
}

interface  CommonParams {
    auth?: googleAuth.OAuth2; 
    fields?: string;
}

interface RequestOptions {
    url?: string,
    method?: string,
    encoding?: string,
    // [index: string]: any
}

declare namespace discovery {
    export interface DiscoveryAPI {
        apis: {
            list(params: ApisListParams, options: RequestOptions, callback: ApisListCallback): request.Request;
            list(params: ApisListParams, callback: ApisListCallback): request.Request;
            list(callback: ApisListCallback): request.Request;
            getRest(params: ApisGetRestParams, options: RequestOptions, callback: ApisGetRestCallback): request.Request;
            getRest(params: ApisGetRestParams, callback: ApisGetRestCallback): request.Request;
            getRest(callback: ApisGetRestCallback): request.Request;
        }
    }

    export interface ApisListParams extends CommonParams {
        name?: ServiceName;
        preferred?: boolean;
    }

    export interface ApisGetRestParams extends CommonParams {
        api: ServiceName;
        version: string;
    }

    export interface ApisListCallback {
        (error: any, body: DirectoryList, response: http.IncomingMessage): void;
    }

    export interface ApisGetRestCallback {
        (error: any, body: RestDescription, response: http.IncomingMessage): void;
    }

    // schemas
    export interface DirectoryItem {
        description: string;
        discoveryLink: string;
        discoveryRestUrl: string;
        documentationLink: string;
        icons: {
            x16: string;
            x32: string;
        }
        id: string;
        kind: string;
        labels: string[];
        name: string;
        preferred: boolean;
        title: string;
        version: string;
    }

    export interface DirectoryList {
        discoveryVersion: string;
        kind: string; // discovery#directoryList
        items: Array<DirectoryItem>
    }

    export interface RestDescription {
        kind: 'discovery#restDescription' | string;
        readonly etag: string;
        discoveryVersion: string;
        id: string;
        name: string;
        canonicalName?: string;
        version: string;
        revision?: string;
        title: string;
        description: string;
        ownerDomain: string; 
        ownerName: string;
        icons: {
            x16: string;
            x32: string;
        };
        documentationLink: string;
        protocol: 'rest' | string;
        baseUrl: string;
        basePath: string;
        rootUrl: string;
        servicePath: string;
        batchPath: 'batch' | string;
        parameters: {
            [index: string]: JsonSchema;
        };
        features?: string[];
        auth?: {
            oauth2: {
                scopes: {
                    [index: string]: {
                        description: string;
                    };
                };
            };
        };
        schemas: {
            [index: string]: JsonSchema;
        };
        resources: RestResources;
        exponentialBackoffDefault?: boolean;
        labels?: string[];
        methods?: {
            [index: string]: RestMethod;
        };
        packagePath?: string;
        version_module?: boolean;
    }

    export interface RestMethod {
        id: string;
        path: string;
        httpMethod: string;
        description: string;
        parameters: {
            [index:string]: JsonSchema;
        };
        parameterOrder?: string[];
        request?: {
            $ref: string;
            parameterName?: string;
        };
        response: {
            $ref: string;
        },
        scopes: string[];
        etagRequired?: boolean;
        mediaUpload?: {
            accept: string[];
            maxSize: string;
            protocols: {
                resumable: {
                    multipart: boolean;
                    path: string;
                };
                simple: {
                    multipart: boolean;
                    path: string;
                };
            };
        };
        supportsMediaDownload?: boolean;
        supportsMediaUpload?: boolean;
        supportsSubscription?: boolean;
        useMediaDownloadService?: boolean;
    }

    export interface JsonSchema {
        id?: string;
        type: 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array' | 'null' | 'any';
        description: string;
        required?: boolean;
        readOnly?: boolean;
        default?: string;
        format?: string; // http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.2
        enum?: string[];
        enumDescriptions?: string[];
        location?: 'query' | 'path' | string;
        $ref?: string;
        additionalProperties?: JsonSchema;
        annotations?: {
            required: string[];
        }
        items?: JsonSchema;
        maximum?: string;
        minimum?: string;
        pattern?: string;
        properties?: {
            [index: string]: JsonSchema;
        };
        repeated?: boolean;
        variant?: {
            discriminant: string;
            map: Array<{
                $ref: string;
                type_value: string;
            }>
        };
    }

    export interface RestResources {
        [index: string]: RestResource;
    }

    export interface RestResource {
        methods: {
            [index: string]: RestMethod;
        };
        resources?: RestResources;
    }
}
export function discovery(options: ServiceOptions & discovery.ApisListParams): discovery.DiscoveryAPI;

declare namespace drive {
    export interface DriveAPI {
        files: {
            list(params: FilesListParams, options:RequestOptions, callback:RequestCallback): request.Request;
            list(params: FilesListParams, callback:RequestCallback): request.Request;
            list(callback:RequestCallback): request.Request;
        }
    }
    export interface FilesListParams extends CommonParams {
        corpus?: string,
        orderBy?: string,
        pageSize?: number,
        pageToken?: string,
        q?: string,
        spaces?: string,
    }
}
export function drive(options: ServiceOptions & drive.FilesListParams): drive.DriveAPI;

export function acceleratedmobilepageurl(p0: any): any;
export function addAPIs(apis: any): void;
export function adexchangebuyer(p0: any): any;
export function adexchangebuyer2(p0: any): any;
export function adexchangeseller(p0: any): any;
export function admin(p0: any): any;
export function adsense(p0: any): any;
export function adsensehost(p0: any): any;
export function analytics(p0: any): any;
export function analyticsreporting(p0: any): any;
export function androidenterprise(p0: any): any;
export function androidpublisher(p0: any): any;
export function appengine(p0: any): any;
export function appsactivity(p0: any): any;
export function appstate(p0: any): any;
export function bigquery(p0: any): any;
export function blogger(p0: any): any;
export function books(p0: any): any;
export function calendar(p0: any): any;
export function civicinfo(p0: any): any;
export function classroom(p0: any): any;
export function cloudbilling(p0: any): any;
export function cloudbuild(p0: any): any;
export function clouddebugger(p0: any): any;
export function clouderrorreporting(p0: any): any;
export function cloudmonitoring(p0: any): any;
export function cloudresourcemanager(p0: any): any;
export function cloudtrace(p0: any): any;
export function clouduseraccounts(p0: any): any;
export function compute(p0: any): any;
export function consumersurveys(p0: any): any;
export function container(p0: any): any;
export function content(p0: any): any;
export function customsearch(p0: any): any;
export function dataflow(p0: any): any;
export function dataproc(p0: any): any;
export function datastore(p0: any): any;
export function deploymentmanager(p0: any): any;
export function dfareporting(p0: any): any;
export function discover(url: any, callback: any): any;
export function discoverAPI(path: any, options: any, callback: any): any;
export function dns(p0: any): any;
export function doubleclickbidmanager(p0: any): any;
export function doubleclicksearch(p0: any): any;
export function firebasedynamiclinks(p0: any): any;
export function firebaserules(p0: any): any;
export function fitness(p0: any): any;
export function fusiontables(p0: any): any;
export function games(p0: any): any;
export function gamesConfiguration(p0: any): any;
export function gamesManagement(p0: any): any;
export function genomics(p0: any): any;
export function gmail(p0: any): any;
export function groupsmigration(p0: any): any;
export function groupssettings(p0: any): any;
export function iam(p0: any): any;
export function identitytoolkit(p0: any): any;
export function kgsearch(p0: any): any;
export function language(p0: any): any;
export function licensing(p0: any): any;
export function logging(p0: any): any;
export function manufacturers(p0: any): any;
export function mirror(p0: any): any;
export function ml(p0: any): any;
export function monitoring(p0: any): any;
export function oauth2(p0: any): any;
export function options(options: any): void;
export function pagespeedonline(p0: any): any;
export function partners(p0: any): any;
export function people(p0: any): any;
export function playmoviespartner(p0: any): any;
export function plus(p0: any): any;
export function plusDomains(p0: any): any;
export function prediction(p0: any): any;
export function proximitybeacon(p0: any): any;
export function pubsub(p0: any): any;
export function qpxExpress(p0: any): any;
export function replicapool(p0: any): any;
export function replicapoolupdater(p0: any): any;
export function reseller(p0: any): any;
export function resourceviews(p0: any): any;
export function runtimeconfig(p0: any): any;
export function safebrowsing(p0: any): any;
export function script(p0: any): any;
export function servicecontrol(p0: any): any;
export function servicemanagement(p0: any): any;
export function sheets(p0: any): any;
export function siteVerification(p0: any): any;
export function slides(p0: any): any;
export function spectrum(p0: any): any;
export function speech(p0: any): any;
export function sqladmin(p0: any): any;
export function storage(p0: any): any;
export function storagetransfer(p0: any): any;
export function surveys(p0: any): any;
export function tagmanager(p0: any): any;
export function taskqueue(p0: any): any;
export function tasks(p0: any): any;
export function toolresults(p0: any): any;
export function translate(p0: any): any;
export function urlshortener(p0: any): any;
export function vision(p0: any): any;
export function webfonts(p0: any): any;
export function webmasters(p0: any): any;
export function youtube(p0: any): any;
export function youtubeAnalytics(p0: any): any;
export function youtubereporting(p0: any): any;
