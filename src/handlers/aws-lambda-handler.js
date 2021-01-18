"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.AwsLambdaHandler = void 0;
var aws_sdk_1 = require("aws-sdk");
var AwsLambdaHandler = /** @class */ (function () {
    /**
     * @param args
     * @private
     */
    function AwsLambdaHandler(args) {
        this.args = args;
        this.response = null;
        /** */
    }
    /**
     * @private
     */
    AwsLambdaHandler.prototype.getLambda = function () {
        var options = {
            apiVersion: '2015-03-31'
        };
        if (this.args.awsAuth && this.args.awsAuth.accessKeyId) {
            options.accessKeyId = this.args.awsAuth.accessKeyId;
            options.secretAccessKey = this.args.awsAuth.secretAccessKey;
        }
        if (this.args.region) {
            options.region = this.args.region;
        }
        return new aws_sdk_1.Lambda(options);
    };
    /**
     * @param args
     * @returns AWSLambdaAdapter
     */
    AwsLambdaHandler.create = function (args) {
        return new AwsLambdaHandler(args);
    };
    /**
     * @private
     * @param args
     */
    AwsLambdaHandler.prototype.invokeLambdaFunction = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var functionArn = args[0];
        var data = args[1];
        var params = {
            FunctionName: functionArn,
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify(__assign({}, data))
        };
        return this.getLambda().invoke(params).promise();
    };
    /**
     * @param functionArn
     * @param data
     *
     * @TODO: Figure out what this should return when response has an Error-like status code
     */
    AwsLambdaHandler.prototype.post = function (functionArn, data) {
        if (data === void 0) { data = {}; }
        return this.invokeLambdaFunction(functionArn, data);
    };
    return AwsLambdaHandler;
}());
exports.AwsLambdaHandler = AwsLambdaHandler;
