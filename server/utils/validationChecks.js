const isValidEnvelopeProperties = (envelope) => {
  if (envelope.title === "" || typeof envelope.title !== "string") {
    throw new TypeError("name must be a non-empty string");
  }

  if (
    !envelope.amount ||
    typeof envelope.amount !== "number" ||
    envelope.amount < 0
  ) {
    throw new TypeError("amount must be a non-negative number");
  }

  return true;
};

module.exports = {
  isValidEnvelopeProperties,
}