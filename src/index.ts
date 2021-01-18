import { AwsLambdaHandler } from './handlers/aws-lambda-handler'
import { AwsLambdaArgs } from './@types'
import { LambdaHandler } from './handlers/lambda-handler'


export const lambdaAxios = (args: AwsLambdaArgs): LambdaHandler => {
    return AwsLambdaHandler.create(args)
}


