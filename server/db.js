const {isValidEnvelopeProperties} = require('./utils/validationChecks.js')

var totalBudget = 0;
var envelopes = [];

const isValidEnvelope = (envelope) => {
  if (!isValidEnvelopeProperties(envelope)) {
    return false;
  }

  const amountAvailable = getAmountAvailable();
  if (amountAvailable < envelope.amount) {
    throw new RangeError(
      "Amount budgeted cannot be greater than total budget."
    );
  }

  const envelopeIndex = envelopes.findIndex(
    (item) => item.name === envelope.name
  );
  if (envelopeIndex !== -1) {
    throw new Error("Envelope with that name already exists");
  }

  return true;
};


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

const updateEnvelope = (title, envelopeUpdate) => {
  const currentEnvelope = getSpecificEnvelope(title);

  const envelopeCheck = {
    title: envelopeUpdate.title,
    amount: envelopeUpdate.amount - currentEnvelope.amount,
  };

  //pass checks
  if (!isValidEnvelopeProperties(envelopeCheck)) {
    throw new Error("Envelope does not have valid properties");
  }

  if (envelopeCheck.amount > getAmountAvailable()) {
    throw new RangeError(
      "New budget amount put budgeted amount over total budget"
    );
  }

  currentEnvelope.title = envelopeUpdate.title;
  currentEnvelope.amount = envelopeUpdate.amount;
  return currentEnvelope;

}

const getAmountAvailable = () => {
  return getTotalBudget() - getAmountBudgeted();
};

const getAmountBudgeted = () => {
  let amountBudgeted = 0;

  envelopes.forEach((item) => {
    amountBudgeted += item.amount;
  });

  return amountBudgeted;
};

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
  updateEnvelope,
  getTotalBudget,
  setTotalBudget,
  getAmountAvailable,
  getAmountBudgeted
}