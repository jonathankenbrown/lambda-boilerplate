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
            sucess
          }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  /****
   * Enter here
   */
  try {
    done(null, "you got an success");
  } catch (error) {
    done(error);
  }
};
