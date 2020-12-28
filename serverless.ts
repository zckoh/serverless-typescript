import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
    service: "typescript",
    frameworkVersion: "2",
    custom: {
        webpack: {
            webpackConfig: "./webpack.config.js",
            includeModules: true,
        },
    },
    // Add the serverless-webpack plugin
    plugins: ["serverless-webpack", "serverless-offline"],
    provider: {
        name: "aws",
        runtime: "nodejs12.x",
        region: "eu-west-1",
        apiGateway: {
            minimumCompressionSize: 1024,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
        },
    },
    functions: {
        graphql: {
            handler: "handler.graphqlHandler",
            events: [
                {
                    http: {
                        method: "get",
                        path: "graphql",
                        cors: true,
                    },
                },
                {
                    http: {
                        method: "post",
                        path: "graphql",
                        cors: true,
                    },
                },
            ],
        },
    },
};

module.exports = serverlessConfiguration;
