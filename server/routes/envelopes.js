const express = require('express');
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()

const { 
  getAllEnvelopes, 
  getSpecificEnvelope, 
  addEnvelope, 
  deleteEnvelope, 
  updateEnvelope } = require('../db.js');

const envelopesRouter = express.Router();

//Get all envelopes
envelopesRouter.get('/', (req, res, next) => {
  const envelopes = getAllEnvelopes();

  res.status(200).json({ envelopes });
});

//Get a specific envelope
envelopesRouter.get('/:title', (req, res, next) => {
  const title = req.params.title;

  const envelope = getSpecificEnvelope(title);
  if(!envelope) {
    res.status(404).send("No envelope with that title exists. Please try again with a new title.");
  }

  res.status(200).json(envelope);
});

//Add a new envelope
envelopesRouter.post('/', jsonParser, (req, res) => {
  try {
    //function to add a new envelope to db
    addEnvelope(req.body);
    
    const jsonEnvelope = JSON.parse(req.body);
    console.log(jsonEnvelope["title"]);
    const newEnvelope = getSpecificEnvelope("hello8");
    console.log(newEnvelope)

    res.status(201).json({ newEnvelope });
  } catch(error) {
    res.status(400).send(error.message);
  }
});

//DELETE an envelope
envelopesRouter.delete('/:title', (req, res) => {
  deleteEnvelope(req.params.title);
  res.status(204).send();
});

//PUT Update an existing envelope
envelopesRouter.put('/:title', jsonParser, (req, res) => {
  try {
    const envelopeUpdate = req.body;
    const updatedEnvelope = updateEnvelope(req.params.title, updateEnvelope); 
    res.send(200).send( {envelope: updateEnvelope} );

  } catch(err) {
    res.status(400).send();
  }
})


module.exports = envelopesRouter