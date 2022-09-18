# Personal Budget App

A budgeting API built using Express.js and tested with Mocha, Chai, and SuperTest.

## Installation

1. Clone (or download) the repository to your system.
2. Download and install [Node.js](https://nodejs.org/en/download/) (~14.17.5) for your system.
3. Run `npm install` in the project's root directory to install all dependencies.
4. Start the server by executing `npm run start` from the command line.

## Usage

### Testing

- Run the tests by executing `npm run test` from the command line.

### Endpoints

#### /budget

- GET request: Retrieve the `totalBudget` (the amount you have the ability to budget) and `amountAvailable`, the amount that has not yet been put into an envelope.
- PUT request: Update the `totalBudget` (the amount you have the ability to budget). If `totalBudget` is not a non-negative number or will be less than the total put into envelopes, send a 400 response

#### /envelopes

- GET request: Retrieve all of the envelopes
- POST request: If an envelope with the given name does not already exist, add it to the collection of envelopes

##### /envelopes/:title

- GET request: Retrieve the envelope with title `:title`. If it does not exist, send a 404
- PUT request: Update the envelope with title `:title`
