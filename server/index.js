const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  fs = require('fs'),
  path = require('path'),
  cors = require('cors');

const port = 3002;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    fs.writeFile (path.resolve(__dirname, 'users.json'), JSON.stringify(req.body), function(err) {
        if (err) {
            res.status(404).json({
                message: 'not success',
                status: false
            })
            return;
        };
            res.status(200).json({
                message: 'success',
                status: true
            })
        }
    );
})

app.listen(port, () => {
    console.log(`ExpressJS App at http://localhost:${port}`)
})

module.exports = app
