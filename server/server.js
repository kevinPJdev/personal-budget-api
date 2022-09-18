require('dotenv').config()
const express = require('express');
const app = express();

const envelopesRouter = require('./routes/envelopes.js');
const budgetRouter = require('./routes/budget.js');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next)=> {
  res.send('Hello world');
});

app.use('/envelopes', envelopesRouter);

app.use('/budget', budgetRouter);

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});