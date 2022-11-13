const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { query } = require("express");
app.use(express.json());
app.use(cors());
const bookingRouter = require("./router/booking.router");
const adminRouter = require("./router/admin.router");
const indoorRouter = require("./router/indoor.router");
const TeamRouter = require("./router/team.router");
const indoorAdminRouter = require("./router/indoorAdmin.router");

app.use("/booking", bookingRouter);
app.use("/admin", adminRouter);
app.use("/indoor", indoorRouter);
app.use("/team", TeamRouter);
app.use("/indoorAdmin", indoorAdminRouter);

module.exports = app;
