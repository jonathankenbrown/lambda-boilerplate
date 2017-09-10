# lambda-boilerplate

## Standard boilerplate for Lambda functions that respond to API calls

In includes comments on how to include libraries to do several typical Lambda actions including:

* requiring the AWS, MySQL databases
* unmarshalling DynamoDB items to standard JSON
* creating Unique ID's
* setting up a Document Dlient to use with DynamoDB stores
* accessing environmental variables
* using util to inspect what is being sent to the Lambda
* A function that is able to return information to client to indicate success or failure

```javascript
/***********************************************************************************
AWS Lambda boilerplate for API functions
This boilerplate is designed to be used with AWS API gateway and to return information
to a client
***********************************************************************************/

const util = require("util");

// - provide access to aws-sdk
//const AWS = require('aws-sdk');

// - provide access to mysql databases
// const mysql = require('mysql');

// - unmarshal a DynamodDB item to standard JSON
// const parse = AWS.DynamoDB.Converter.output;

// - used to create unique IDs. requires installation of uuid npm package
// const uuidv1 = require('uuid/v1');

// - set up a docClient to use with dynamoDB store
/* let docClient = new AWS
    .DynamoDB
    .DocumentClient(); */

// - access an environmental variable
// let host = process.env.dbHost;

exports.handler = (event, context, callback) => {
  const done = (err, response) => {
      // return the required callback function
    callback(null, {
      statusCode: err ? "400" : "200",
      body: err
        ? JSON.stringify({
            type: "error",
            err
          })
        : JSON.stringify({
            type: "success",
            response
          }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  /****
   * Enter here
   */
  // see the event that was received
  console.log(
    "fields: ",
    util.inspect(event, { showHidden: false, depth: null })
  );

  // try to do some stuff
  try {
    done(null, "Much success!! Very API!!");
  } catch (error) {
    done(error);
  }
};
```