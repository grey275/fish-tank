var express = require('express');


var PORT = process.env.PORT || 8000;


var app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
