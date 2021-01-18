## lambda-axios

This is a simple axios-like library - for invoking AWS lambdas.

Inspired by axios, obviously ;-)

Response Schema:

IDEA!

```json
{
  // `data` is the response that was provided by the server
  "data": {},
  // `status` is the HTTP status code from the server response
  "status": 200,
  // `statusText` is the HTTP status message from the server response
  "statusText": 'OK',
  // `headers` the HTTP headers that the server responded with
  // All header names are lower cased and can be accessed using the bracket notation.
  // Example: `response.headers['content-type']`
  "headers": {},
  // `config` is the config that was provided to `axios` for the request
  "config": {},
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  "request": {}
}
```

IDEA!

```js
const lambdaAxiosInstance = lambdaAxios({
    region: 'eu-west-2',
    headers: {},
    awsAuth: {
        accessKeyId: '...',
        secretAccessKey: '...'
    }
})

const response = await lambdaAxiosInstance.post('arn:aws:lambda:eu-west-2:397049353178:function:framble-lambdas-staging-sendNotification', {
    detail: {
        push_identity: '46',
        name: 'event-invite',
        type: 'push'
    }
})
```

GOAL!!!

```js
const lambdaAxios = lambdaAxios.create({});

await lambdaAxios.post('function-name', {/** data */}, {/** config e.g. headers */})
```