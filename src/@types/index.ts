export interface AuthArgs {
    accessKeyId: string         // aws access key ID
    secretAccessKey: string     // aws secret access key
}

export interface HeadersArgs {
    [key: string]: any
}

export interface DataArgs {
    [key: string]: any
}

export interface AwsLambdaArgs {
    awsAuth?: AuthArgs
    region?: string      // aws region
}
