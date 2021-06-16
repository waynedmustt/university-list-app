# Description
The University List App build using React.js. Server is needed to save the newsletter data as users.json.

## Run Application
```bash
# install both client and server (assume you are in root directory)
$ cd client
$ yarn install

$ cd server
$ yarn install

# run server
$ node index.js

# copy .config.json in client (assume you are in root directory)
$ cp .config.json.example .config.json

# run client
$ yarn start
```

## ESLint and Testing
```bash
# ESLint (assume you are in root directory)
$ cd client
$ yarn run eslint "./src/**"
$ yarn test
```