const express = require("express");
const app = express();
const configure = require("./config/database");
const routes = require("../app/config/routes");
const cors = require("cors");
const server = require("http").createServer(app);
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3040;

app.use(cors(process.env.PORT || "http://localhost:3000/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(dirname, 'client/build')));
configure();

//* Handles any requests that don't match the ones above
app.use("/", routes);

// app.get('/*', (req, res) => {
    //   res.sendFile(path.join(dirname + '/client/build/index.html'));
    // });

// mongoose.connection.once("open", () => {
//   console.log("connected to DB");
// //   const changeStream = mongoose.connection.collection("rooms").watch();

// });

server.listen(port, () => {
  console.log("port listening on ", port);
});
