const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config.firebase);


// --------------SERVER CONFIGURATION-------------
const express = require("express");
const app = express();
const cors = require("cors");

// eslint-disable-next-line max-len
const bodyParser = require("body-parser"); // pull information from HTML POST (express4)
const methodOverride = require("method-override");


// eslint-disable-next-line camelcase
const route_index = require("./routes/index");

// ---------------END OF SERVER CONFIGURATION---------


// ------------------------APP CONFIGURATION---------------------------
app.use(express.static(__dirname + "/routes"));
app.use(express.static(__dirname + "/controllers"));
app.use(cors({origin: true}));
// --------------------------END OF APP CONFIGUARATION---------


// --------------------APPLICATION MIDDLEWARE----------------------------
// eslint-disable-next-line max-len
app.use(bodyParser.urlencoded({"extended": "true"})); // parse application/x-www-form-urlencoded
// eslint-disable-next-line max-len
app.use(bodyParser.json()); // parse application/json
// eslint-disable-next-line max-len
app.use(bodyParser.json({type: "application/vnd.api+json"})); // parse application/vnd.api+json as json
app.use(methodOverride());
// eslint-disable-next-line max-len
// --------------------------------------------------------------------------------------------------------


// ----------------------> Routing -------------
app.get("/api/repos/:username", route_index);
app.get("/api/users/:username", route_index);
// -----------------------> End of Routing ---------------------


// --------------> This runs on all requests are sent -----
exports.expressApi = functions.https.onRequest(app);
