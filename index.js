const util = require("util");

// - provide access to aws-sdk
//const AWS = require('aws-sdk');

// - provide access to mysql databases
// const mysql = require('mysql');

// not sure what this is for
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
  const done = (err, success) => {
    callback(null, {
      statusCode: err ? "400" : "200",
      body: err
        ? JSON.stringify({
            type: "error",
            err
          })
        : JSON.stringify({
            type: "success",
            success
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

  try {
    done(null, "Much success!! Very API!!");
  } catch (error) {
    done(error);
  }
};
