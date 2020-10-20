const path = require("path");
const router = require("express").Router();

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../develop/public/exercise.html"));
  });

  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../develop/public/stats.html"));
  });

  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../develop/public/index.html"));
  });

  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../develop/public/index.html"));
  });

module.exports = router;