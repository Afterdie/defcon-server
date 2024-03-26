const express = require("express");
const app = express();
app.use(express.json());
const PORT = 8000;
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.sendStatus(200);
});

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

var score = {
  team0: 0,
  team1: 0,
};

app.get("/incteam", (req, res) => {
  res.status(200).send({ score: score.team0 });
});
app.patch("/incteam", (req, res) => {
  console.log(req.body);
  res.end();
});

// app.post("/addplayer", (req, res) => {
//   console.log(req.body);
//   if (req.body.faction == 0) {
//     team0Score.push({
//       uuid: req.body.uuid,
//       score: 0,
//     });
//   } else {
//     team1Score.push({
//       uuid: req.body.uuid,
//       score: 0,
//     });
//   }
// });

app.listen(PORT);
