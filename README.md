# CD tests

## local build

`cd-api-test/{authtype}`

- yarn && yarn start

`amplify-js`

- yarn && yarn build
- npx lerna exec --scope @aws-amplify/pubsub yarn build:esm:watch
- cp -r packages/pubsub/lib-esm /Users/mcafd/workplace/cd-api-test/iam/node_modules/@aws-amplify/pubsub/
