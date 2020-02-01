# Microserverless
A serverless microservice using Azure Functions and Node.js. The service exposes a basic REST API for CRUD operations.

## Features
This project serves as a fundament on which you can build upon to create your next awesome (serverless) application.

- Leverages the power of TypeScript
- Validates request input
- Handles exceptions gracefully
- Lightweight with little configuration
- Organized project structure
- Shipped with tests using Jest

## Getting started
Install the dependencies using NPM or Yarn:

    $ npm install

To run your function app locally using Core Tools, run the following command:

    $ npm start

**Note:** In order to run a Azure Function App locally, the `azure-functions-core-tools` package needs to be installed. Refer to the [official documentation](https://docs.microsoft.com/nl-nl/azure/azure-functions/functions-run-local), or follow one of the steps below:

- For Windows (using NPM):
    
       $ npm install -g azure-functions-core-tools

- For MacOS (using HomeBrew):
    
       $ brew tap azure/functions
       $ brew install azure-functions-core-tools

- For Linux: See the [docs](https://docs.microsoft.com/nl-nl/azure/azure-functions/functions-run-local?tabs=linux#install-the-azure-functions-core-tools). It's a bit more complex.

#### Publish to Azure
Create a production-ready build of JavaScript files from the TypeScript source files:

    $ npm run build:production
    
Deploy to Azure using the `publish` command: 

    $ func azure functionapp publish <APP_NAME>

## Project structure

    |-- functions
        |-- IndexProduct
            |-- function.json
            |-- index.ts
        |-- CreateProduct
        |-- GetProduct
        |-- ShowProduct
        |-- DeleteProduct
    |-- lib
        |-- Constants
        |-- Controllers
        |-- Errors
        |-- Schemas
        |-- Services
        |-- Util

Each function lives in its own folder. The configuration is defined in `function.json` and the handler logic in `index.ts`.

## Available commands
See `package.json` for all available commands.

Running `npm start` is the equivalent of:

    $ npm run build
    $ npm run tsc
    $ func start --script-root ./functions
    
Running `npm test` starts Jest and runs the tests. 

## Design practices

Consider the practices mentioned below when coding your application.

#### Asynchronous programming
When writing Azure Functions in JavaScript, you should write code using the `async` and `await` keywords. Writing code using async and await instead of callbacks or `.then` and `.catch` with Promises helps avoid two common problems:

1. Throwing uncaught exceptions that crash the Node.js process, potentially affecting the execution of other functions.
2. Unexpected behavior, such as missing logs from `context.log`, caused by asynchronous calls that are not properly awaited.

#### Loose coupling
Write your business logic so that it is separate from your FaaS provider (e.g., Azure Functions), to keep it provider-independent, reusable and more easily testable. Construct and inject dependencies instead of using them directly in your function, this way you can easily replace these services with mocks.

#### Write stateless
Functions should be stateless and idempotent if possible. You have no guarantee that the application state is persisted across multiple or different function calls or contexts.

#### Think small
Large, long-running functions can cause unexpected timeout issues. Whenever possible, refactor large functions into smaller function sets that work together and return responses fast. Processing time-consuming tasks can be deferred until a later time.

## Next steps
- Play with different [triggers & bindings](https://docs.microsoft.com/en-US/azure/azure-functions/functions-triggers-bindings) to leverage the power of Event Grid, Service Bus, Blob Storage, SendGrid and many more services.
- Read more about the [Saga pattern](https://microservices.io/patterns/data/saga.html) and [Durable Functions](https://docs.microsoft.com/en-US/azure/azure-functions/durable/durable-functions-overview) to allow for transactions and states.
- Check out the additional resources below.

## Built with
- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [TypeScript](https://www.npmjs.com/package/typescript) - JavaScript that scales
- [Class Validator](https://www.npmjs.com/package/class-validator) - Validation using decorators
- [Jest](https://www.npmjs.com/package/jest) - Delightful JavaScript testing

## Additional resources
- [What is Serverless?](https://serverless-stack.com/chapters/what-is-serverless.html)
- [Everything about Microservices](https://microservices.io/)
- [Creating your first function](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code?pivots=programming-language-typescript)
- [Function Reference for Node.js](https://docs.microsoft.com/en-US/azure/azure-functions/functions-reference-node)
- [Using TypeScript with Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#typescript)
- [Building Serverless Microservices](https://azure.microsoft.com/en-US/blog/building-serverless-microservices-in-azure-sample-architecture/)
- [Check out the Serverless Framework](https://serverless.com/)
- [How to implement the Saga pattern](https://blog.couchbase.com/saga-pattern-implement-business-transactions-using-microservices-part/)
- [Manage your Azure resourcing using the CLI](https://docs.microsoft.com/nl-nl/cli/azure/install-azure-cli?view=azure-cli-latest)
- [Shifting your Node express APIs to serverless](https://johnpapa.net/shifting-your-node-express-apis-to-serverless/)
