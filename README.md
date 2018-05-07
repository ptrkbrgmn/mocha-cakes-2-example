
## How to ##
```sh
mkdir mocha-cakes-2-test
cd mocha-cakes-2-tests
npm init
npm install chai chai-as-promised eslint mocha mocha-cakes-2 supertest express --save-dev
```

#### --save-dev ####
If someone is planning on downloading and using your module in their program, then they probably don't want or need to download and build the external test or documentation framework that you use.

`package-lock.json` is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

#### ESLint ####
ESLint is an open source JavaScript linting utility. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.

JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

Installation:
```sh
npm install eslint --save-dev
```

Initialize:
```sh
./node_modules/.bin/eslint --init
```

On question 'which files'? provide `/Users/patrik.bergman/integration-test/nav-klara-it`

Run ESlint:
```sh
./node_modules/.bin/eslint /Users/patrik.bergman/integration-test/nav-klara-it
```

#### Debugging ####
Debug mocha Tests
```sh
node --inspect-brk $(npm bin)/_mocha --timeout=0
```
https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27


#### Misc ####
##### Atom #####
Comment out block of code: `cmd + shift + 7`
Show Markdown preview: `ctrl + shift + m`

##### npm-check #####
Install globally. For checking npm dependencies
Also good to have is npm-install-peers