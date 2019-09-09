const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/cond-atmos", function(req, res) {
  const p = req.query.page;
  if (p) {
    const url =
      "https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=" + p;
    fetch(url)
      .then(res => res.text())
      .then(body => {
        for (let i = 0; i < 100; i++) {
          //console.log(JSON.parse(body).results[i]);
          res.end(JSON.stringify(JSON.parse(body).results));
        }
      })
      .catch(err => console.log(err));
  } else {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=1";
    fetch(url)
      .then(res => res.text())
      .then(body => {
        for (let i = 0; i < 100; i++) {
          //console.log(JSON.parse(body).results[i]);
          res.end(JSON.stringify(JSON.parse(body).results));
        }
      })
      .catch(err => console.log(err));
  }
});
module.exports = router;
