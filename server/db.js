var totalBudget = 0;
var envelopes = [{
    title: "food",
    amount: 100
}];

//GET all envelopes 
const getAllEnvelopes = () => {
  return envelopes;
}

//GET a envelope with title
const getSpecificEnvelope = (title) => {
  return envelopes.find((envelope) => envelope.title === title);
}

//POST a new envelope 
const addEnvelope = (newEnvelope) => {
  envelopes.push({
    title: newEnvelope.title,
    amount: newEnvelope.amount
  });
}

module.exports = {
  getAllEnvelopes,
  getSpecificEnvelope,
  addEnvelope
}