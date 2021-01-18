## lambda-axios

!!! THIS IS STILL A WORKING PROGRESS.

This is a simple axios-like library - for invoking AWS lambdas.

Completely inspired by [axios](https://github.com/axios/axios)!

### Usage

```js
const lambdaAxiosInstance = lambdaAxios({
    region: 'eu-west-1',
    awsAuth: {
        accessKeyId: 'AWS_ACCESS_KEY_ID',
        secretAccessKey: 'AWS_SECRET_ACCESS_KEY_ID'
    }
})

lambdaAxiosInstance
    .post('aws-lambda-function-arn', {
        message: "Hello world"
    }).then(response => {
    console.log({response})
})
    .catch(error => {
        console.error(error)
    })
```

### Why?

I created this to make it easier to make a switch back to the main [axios](https://github.com/axios/axios) - without
having to do a massive refactor.

This is more for my personal use - but you never know.