"use strict";
exports.__esModule = true;
exports.lambdaAxios = void 0;
var aws_lambda_handler_1 = require("./handlers/aws-lambda-handler");
var lambdaAxios = function (args) {
    return aws_lambda_handler_1.AwsLambdaHandler.create(args);
};
exports.lambdaAxios = lambdaAxios;
