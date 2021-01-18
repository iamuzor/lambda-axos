const {lambdaAxios} = require('./index')

/**
 * TODO: COMPLETE TESTS !!!
 */
describe('index', () => {
    test('Should ...', async () => {
        const lambdaAxiosInstance = lambdaAxios({
            region: 'eu-west-2',
            awsAuth: {
                accessKeyId: '...',
                secretAccessKey: '...'
            }
        })

        const response = await lambdaAxiosInstance.post('arn:aws:lambda:region:accountid:function:example-function', {
            message: 'Hello world'
        })

        console.log({response})
    })
})