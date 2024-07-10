const express = require("express");
const express = require("path");
const app = express();
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
})