const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  // const moves = ['F', 'T', 'L', 'R'];
  const moves = ['T', 'L', 'T', 'R'];

  const selfUrl = req.body[_links].self.href;
  
  const {
    arena: {
      state: {
        selfUrl: {
          x,
          y,
          direction,
        }
      }
    }
  } = req.body;

  if (x !== 3) {
    if (x < 3) {
      if (direction !== "E") res.send("R");
      else res.send("F");
    } else if (x > 3) {
      if (direction !== "W") res.send("R");
      else res.send("F");
    }
  } else if (y !== 3) {
    if (y < 3) {
      if (direction !== "S") res.send("R");
      else res.send("F");
    } else if (y > 3) {
      if (direction !== "N") res.send("R");
      else res.send("F");
    }
  } else {
    res.send(moves[Math.floor(Math.random() * moves.length)]);
  }
  
});

app.listen(process.env.PORT || 8080);
