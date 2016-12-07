# Picasa resumable uploader
I used [googlecl](https://code.google.com/archive/p/googlecl/) and [picasawebsync](https://github.com/leocrawford/picasawebsync) for syncing my photos and videos to Picasa(Google photos).

But they are not working now.
- googlecl does not support OAuth2.
- picasawebsync fails to upload video (except photo) file.
    - Should change upload protocol.

I write the code to upload my video to google photos.
- OAuth2 using [google-auth-lirary-nodejs](https://github.com/google/google-auth-library-nodejs)
    - written with typescript
- Upload video files using [resumable upload protocol](https://developers.google.com/gdata/docs/resumable_upload)
    - written with bash, curl and xsltproc
    - To get hidden resumable-post link I hack the working ios app. 

## Features
- Support OAuth2
- Upload video using resumable upload protocol 
- Upload photo
- List albums and photos
- Delete albums and photos
- Modify property of albums and photos
    - Google does not allow to change timestamp.

## Prerequisites
* Ubuntu
```bash
$ sudo apt-get install nodejs
$ sudo apt-get install curl
$ sudo apt-get install xsltproc
# if you can not run node
$ sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
```

* macOS : already installed
```bash
$ brew install node
```

## Install
```bash
$ git clone 'git@github.com:thatseeyou/picasa-resumable-uploader.git'
$ cd picasa-resulable-uploader
$ npm Install
$ mkdir ~/.credentials
$ cp <downloaded client secret file> ~/.credentials/picasa-resumable-uploader_client_secret.json (refer next section)
$ ./picasa list album
```

## Get client_secret.json
1. Go to https://console.developers.google.com/start/api?id=drive
2. Click 'Continue'
3. Click 'Go to credentials'
4. Click 'What credentials do I need' after setting the following
    - Where will you be calling the API from? > Other UI
    - What data will you be accessing? > User data
5. Click 'Create client ID' ('Name' is not important)
6. Click 'Continue' after setting 'Product Name' like 'picasa uploader'
7. Click 'Download' and remane downloaded file to client_secret.json

## Run
```bash
$ ./picasa
NOTICE: The order of options matters.
picasa [-v] list album [--tab | --xml | --raw-xml] [album name]
picasa [-v] create album <album name> [summary] 
picasa [-v] delete album [album name]
picasa [-v] modify album <album name> <property key> <property value>
                         2016-10 title "New Title"
picasa [-v] list photo [--tab | --xml | --raw-xml] <album name> [photo name]
picasa [-v] delete photo <album name> [photo name]
picasa [-v] delete pending
picasa [-v] modify photo <album name> <photo name> <property key> <property value>
                         2016-10 '2016-10-02 111234.mp4' title "New Title"
                         2016-10 '2016-10-02 111234.mp4' summary "New summary"
picasa [-v] upload photo <album name> <file path>
```

