const express = require('express');

const { getAllEnvelopes } = require('../db.js')

const envelopesRouter = express.Router();

envelopesRouter.get('/', (req, res, next) => {
  console.log("I've hit the envelopesRouter");
  const envelopes = getAllEnvelopes();


  res.status(200).json({ envelopes });
});

module.exports = envelopesRouter