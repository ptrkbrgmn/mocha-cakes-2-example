
# mocha-cakes-2 example

## Resources
https://github.com/iensu/mocha-cakes-2  
https://github.com/visionmedia/supertest

I have used Atom https://atom.io/. We could also use IntelliJ Ultimate.

## Prerequisites ##
Install node and npm  
Example:
https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/

## Test case ##
Acceptance test of for fetching a single video from Klaras REST API:   
 
<b>Given</b> there is a video added to ElasticSearch with id 'dn.screen9.1uwHxJLDuuBKBHGHQcissw'  
<b>When</b> fetching a video with id 'dn.screen9.1uwHxJLDuuBKBHGHQcissw'  
<b>Then</b> response should contain the right json body  

```json
{
  "id" : "dn.screen9.1uwHxJLDuuBKBHGHQcissw",
  "fileName" : "20171107-arbogany-1053_NormalHires.mp4",
  "title" : "Grafikfilm: Arbogamorden  (uppdaterad för hovrätten)",
  "description" : "Huvudpersonerna och händelserna som ledde fram till rättegången och dom mot den 42:åriga kvinnan och hennes pojkvän. Nu prövas målet i Svea Hovrätt",
  "streamUrl" : "https://video-cdn.dn.se/M/V/1/u/1uwHxJLDuuBKBHGHQcissw_360p_h264h.mp4?v=1&token=0ed558211ccafe3db4784",
  "thumbnails" : {
    "small" : "https://csp.screen9.com/img/1/u/w/H/thumb_1uwHxJLDuuBKBHGHQcissw/8.jpg",
    "large" : "https://csp.screen9.com/img/1/u/w/H/image_1uwHxJLDuuBKBHGHQcissw/8.jpg"
  },
  "duration" : "PT1M36.28S",
  "publishedAt" : null,
  "createdAt" : "2017-11-07T14:36:46.000+01:00",
  "createdBy" : null,
  "transcodeStatus" : "done",
  "sentToTranscodeAt" : "2017-11-07T14:38:12.000+01:00",
  "status" : "published"
}
```

## Setup test fixture ##
In nav project comment out existing Groovy tests mvn execution in script `.run.sh`, and then it to start containers with ElasticSearch, Redis and nav-klara-dx up and running:
```sh
./integration-test/nav-klara-it/run.sh
```

## Run test ##
```sh
$ npm test
```

## Test Success Output
```sh
  Feature: Videos
    Scenario: Fetch a single video
      ✓ Given there is a video added to elasticsearch
      ✓ When fetching a video with id dn.screen9.1uwHxJLDuuBKBHGHQcissw/ from nav-klara-dn
      ✓ Then response should contain the right data
Cleaning up

  3 passing (52ms)
```

## Test Failure Output
```sh
  Feature: Videos
    Scenario: Fetch a single video
      ✓ Given there is a video added to elasticsearch
      ✓ When fetching a video with id dn.screen9.1uwHxJLDuuBKBHGHQcissw/ from nav-klara-dn
      1) Then response should contain the right data
Cleaning up


  2 passing (61ms)
  1 failing

  1) Feature: Videos
       Scenario: Fetch a single video
         Then response should contain the right data:

      AssertionError: expected { id: 'dn.screen9.1uwHxJLDuuBKBHGHQcissw',...,status: 'published' } 
      to deeply equal { id: 'dn.screen9.1uwHxJLDuuBKBHGHQcissw',...,
  status: 'publishedxx' }
      + expected - actual

         "fileName": "20171107-arbogany-1053_NormalHires.mp4"
         "id": "dn.screen9.1uwHxJLDuuBKBHGHQcissw"
         "publishedAt": [null]
         "sentToTranscodeAt": "2017-11-07T14:38:12.000+01:00"
      -  "status": "published"
      +  "status": "publishedxx"
         "streamUrl": "https://video-cdn.dn.se/M/V/1/u/1uwHxJLDuuBKBHGHQcissw_360p_h264h.mp4?v=1&token=0ed558211ccafe3db4784"
         "thumbnails": {
           "large": "https://csp.screen9.com/img/1/u/w/H/image_1uwHxJLDuuBKBHGHQcissw/8.jpg"
           "small": "https://csp.screen9.com/img/1/u/w/H/thumb_1uwHxJLDuuBKBHGHQcissw/8.jpg"

      at Proxy.assertEql (node_modules/chai/lib/chai/core/assertions.js:1080:10)
      at Proxy.methodWrapper (node_modules/chai/lib/chai/utils/addMethod.js:57:25)
      at doAsserterAsyncAndAddThen (node_modules/chai-as-promised/lib/chai-as-promised.js:289:22)
      at Proxy.<anonymous> (node_modules/chai-as-promised/lib/chai-as-promised.js:255:20)
      at Proxy.overwritingMethodWrapper (node_modules/chai/lib/chai/utils/overwriteMethod.js:78:33)
      at Context.Then (test/features/klara-dn-videos-feature-test.js:51:23)



npm ERR! Test failed.  See above for more details.
```

### Pros
+ Very fast (below 100 ms compared to more than 1 second for ScalaTest)
+ Very nice output
+ Good to have knowledge about node and javascript when communicating with BN web developers
 
### Cons
- Can be run by IntelliJ Standard Edition, need Ultimate, still not working though
- Verbose output on error
- Not very intuitive error message when host unavailable
- Not very much information on the web when googling on errors?


## Good to know ##

#### --save-dev ####
If someone is planning on downloading and using your module in their program, then they probably don't want or need to download and build the external test or documentation framework that you use.

#### package-lock ####
`package-lock.json` is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

#### ESLint ####
ESLint is an open source JavaScript linting utility. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.

JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

#### Debugging ####
To debug mocha tests in Chrome:  
Open Chrome DevTools inspect page by entering `about:inspect` in Chrome address bar 
Start tests by running the following command in project root folder
```sh
node --inspect-brk $(npm bin)/_mocha --timeout=0
```
To open Chrome Dev Tools klick on the inspect link showing in Chrome web page

https://nodejs.org/en/docs/guides/debugging-getting-started/
https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2
https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27

#### Misc ####
##### Atom #####
Comment out block of code: `cmd + shift + 7`
Show Markdown preview: `ctrl + shift + m`

##### npm-check #####
Install globally. For checking npm dependencies
Also good to have is npm-install-peers
