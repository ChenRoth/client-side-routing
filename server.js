const express = require("express");
const cors = require("cors");
const path = require('path');

// we run this require to make the sql connection code execute early
// this way, by the time the HTTP server is up, we already have an SQL connection
require("./db/db");

const { api } = require("./api/api");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

// we set up all API endpoints to start with /api
app.use("/api", api);

// server client static files (html, client js, css, images etc.)
app.use("/", express.static("client"));

app.use('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'index.html')));

app.listen(PORT, () => {
  console.log(`Server is up at ${PORT}`);
});
