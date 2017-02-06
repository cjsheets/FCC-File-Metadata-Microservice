# File Metadata Microservice

## Overview

This app demonstrates the file metadata inspection capabilities of Node.js middleware. The client is built on Angular v2.x
and Typescript, with a backend supported by Node + MongoDB and hosted on Heroku.

A demo version of this app is deployed at: [https://m3ta.herokuapp.com/](https://m3ta.herokuapp.com/)

![](client/assets/img/app-screenshot.jpg?raw=true)

Part of the [FreeCodeCamp](https://www.freecodecamp.com/cjsheets) curriculum based on the following user stories:

* I can submit a FormData object that includes a file upload.
* When I submit something, I will receive the file size in bytes within the JSON response

### Version 2.0

This app underwent a major rewrite to simplify the codebase, improve 
readability and remove dependencies. 

The next step is to develop tests for the file-metadata component and node server.

The old version will remain available in the 1.0.0 branch.

## Install

Clone this repository and install npm dependencies:

```
git clone git@github.com:cjsheets/node-file-metadata-microservice.git
cd node-file-metadata-microservice
npm install
```

## Run

To run locally or deploy, first build the client with `ng build`, and start the backend:

```
npm run express-prod
```

Navigate to `http://localhost:3000`

## Dev

For client development, first create a `proxy.conf.json` to redirect client requests from
webpacks dev server to the backend:

```
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

Start the backend with: `npm run express-dev`, followed by the development server in a separate
terminal session: `npm run proxy`

Navigate to `http://localhost:4200`

## Technology Stack

This package contains:

| Front-End | Back-End |
| ------- | ------- |
| Angular v2.x | Node.js |
| Material | Express |
| HTML5/CSS | Multer |
| Webpack |  |

| Both | 
| ------- |
| Typescript |


### Credit

* MultipartItem/MultipartUploader: [wangzilong](https://github.com/wangzilong/angular2-multipartForm)


### License

MIT License

[![Analytics](https://cjs-beacon.appspot.com/UA-10006093-3/github/cjsheets/node-file-metadata-microservice?pixel)](https://github.com/cjsheets/node-file-metadata-microservice)
