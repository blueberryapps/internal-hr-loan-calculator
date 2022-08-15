# internal-hr-loan-calculator

Loan calculator repository for hiring purposes

## The task

As a user who needs to borrow some money I would like to have the ability to choose the amount and
term of the loan so that I know what will be my monthly instalment and interest.

### Features

- 2 sliders

  - 1st slider controls the amount
  - 2nd slider controls the term (number of loan)

- The configuration of the calculator you can get using call
  the api https://js-developer-secondround.herokuapp.com/api/v1/application/constraints
  where the response is the intervals for filling the sliders

- If you change the total amount or term values using the slider in the green part:
  - You need to update the number above slider to match the value in the slider using global state.
  - You need to recalculate/update the results using the api call
    https://js-developer-secondround.herokuapp.com/api/v1/application/realfirst-loan-offer? amount=1000&term=5
    where the response is the resulting values for the loan calculator.

#### The API

- https://js-developer-second-round.herokuapp.com/api/v1/application/constraints

  Response: {"amountInterval":{"min":10,"max":2000,"step":10,"defaultValue":400},"termInterval":{"min":3,"max":30,"step":1,"defaultValue":15}}

- https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer?amount=1000&term=5

  Response: {"totalPrincipal":"1000","term":"5","totalCostOfCredit":100,"totalRepayableAmount":1200,"monthlyPayment":240}

#### Needed

- Use React Hooks
- Use Typescript
- Use Global state
- Cache all requests so the application is more responsive to user input - meaning -
  if I have already called request for 1000 dollars and 15 months, then whenever later I
  would again want to display the amount for this combination there would not be any call
  on api but the cached value would be displayed.

#### Objective

Good user experience and not redundant network requests.
