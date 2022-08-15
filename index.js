const express = require("express");
const config = require("./config");
// const cors = require("cors");
const bodyParser = require("body-parser");

const incidentRoutes = require("./routes/incidentRoutes");
const authRoutes = require("./routes/authRoutes");
const warningRoutes = require("./routes/warningRoutes");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var cors = require("cors");
// app.use(cors);
app.use(cors({origin: true, credentials: true}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// add this below app.use("/", routes) to make index.html a static file
 
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

app.use("/api", incidentRoutes.routes);
app.use("/api", warningRoutes.routes);
app.use("/api", authRoutes.routes);

app.use((request, response, next) => {
  console.log("middleware");
  next();
});

app.listen(config.port, () =>
  console.log("Server is listening on http://localhost:" + config.port)
);
