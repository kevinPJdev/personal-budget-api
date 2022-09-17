var totalBudget = 0;
var envelopes = [];

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

const deleteEnvelope = (title) => {
  const envelopeIndex = envelopes.findIndex((envelope) => {envelope.title === title});

  if(envelopeIndex !== -1) {
    envelopes = envelopes.splice(envelopeIndex, 1)
  }
}

//GET total budget
const getTotalBudget = () => {
  return totalBudget;
}

//Set a new total budget 
const setTotalBudget = (amount) => {
  if (typeof amount !== "number") {
    throw new Error('Budget must be a number');
  }

  if (amount < 0 ) {
    throw new Error('Budget cannot be negative')
  }

  totalBudget = amount;
}



module.exports = {
  getAllEnvelopes,
  getSpecificEnvelope,
  addEnvelope,
  deleteEnvelope,
  getTotalBudget,
  setTotalBudget,
}