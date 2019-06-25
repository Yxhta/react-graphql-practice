const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

server.express.use(cookieParser());

// decode the JWT so we can get the user_id on each request
//server.express.use((req, res, next) => {
//  const { token } = req.cookies;
//  if (token) {
//    const { userId } =jwt.verify(token, process.env.APP_SECRET);
//    req.userId = userId;
//  }
//  next();
//});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://locahost:${deets.port}`);
  }
);
