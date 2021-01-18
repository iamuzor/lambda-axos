import { DataArgs } from '../@types'

export interface LambdaHandler {
    post(functionArn: string, data: DataArgs): any
}