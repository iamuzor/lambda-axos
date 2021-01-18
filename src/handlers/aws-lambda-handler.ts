import { AwsLambdaArgs, DataArgs } from '../@types'
import { LambdaHandler } from './lambda-handler'
import { Lambda } from 'aws-sdk'

export class AwsLambdaHandler implements LambdaHandler {
    private response: any = null

    /**
     * @param args
     * @private
     */
    private constructor(private readonly args: AwsLambdaArgs) {
        /** */
    }

    /**
     * @private
     */
    private getLambda(): Lambda {
        const options: Lambda.Types.ClientConfiguration = {
            apiVersion: '2015-03-31',
        }

        if (this.args.awsAuth && this.args.awsAuth.accessKeyId) {
            options.accessKeyId = this.args.awsAuth.accessKeyId
            options.secretAccessKey = this.args.awsAuth.secretAccessKey
        }

        if (this.args.region) {
            options.region = this.args.region
        }

        return new Lambda(options)
    }

    /**
     * @param args
     * @returns AWSLambdaAdapter
     */
    public static create(args: AwsLambdaArgs) {
        return new AwsLambdaHandler(args)
    }

    /**
     * @private
     * @param args
     */
    private invokeLambdaFunction(...args: any): Promise<{ $response: { [key: string]: any } }> {
        const functionArn = args[0]
        const data = args[1]

        const params: Lambda.Types.InvocationRequest = {
            FunctionName: functionArn,
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify({
                ...data,
            }),
        }

        return this.getLambda().invoke(params).promise()
    }

    /**
     * @param functionArn
     * @param data
     *
     * @TODO: Figure out what this should return when response has an Error-like status code
     */
    public post(functionArn: string, data: Partial<DataArgs> = {}) {
        return this.invokeLambdaFunction(functionArn, data)
    }
}