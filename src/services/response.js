const HEADERS = {
  "Content-Type": "application/javascript",
  "Access-Control-Allow-Origin": "*"
};
module.exports = callback => ({
  graphql: (err, res) => {
    res.headers = {
      ...res.headers,
      ...HEADERS
    };
    callback(null, res);
  },
  send: body => {
    const res = {
      headers: HEADERS,
      statusCode: 200,
      body: JSON.stringify(body)
    };
    callback(null, res);
  },
  error: e => {
    if (typeof e === "string") e = { message: e };
   // if (!e.isDVError) e.message = "Oops! Something went wrong!";
    const res = {
      headers: HEADERS,
      statusCode: e.statusCode || 400,
      body: JSON.stringify({ success: false, error: e.message })
    };
    callback(null, res);
  }
});
