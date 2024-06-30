const express = require("express");
const { indexPage, errorPage } = require("./controllers/baseController");
const logger = require("./middlewares/logger");
const accountRoute = require("./routes/accountRoutes");
const authRoute = require("./routes/authRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(logger);
app.use("/accounts", accountRoute);
app.use("/auth", authRoute);

app.get("/", indexPage);

app.all("*", errorPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
