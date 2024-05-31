const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Clare! You got this, you can trade consistently and brilliantly, you ARE a consistent trader!!! Believe in yourself.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
