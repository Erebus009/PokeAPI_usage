const router = require("express").Router();
const fetchP = import("node-fetch").then((mod) => mod.default);
const fetch = (...args) => fetchP.then((fn) => fn(...args));

router.get("/pokemon", async (req, res) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => {
      res.json(err);
    });
  res.json(response);
});

module.exports = router;
