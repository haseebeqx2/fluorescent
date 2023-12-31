## Classroom Fluorescent Tubes Simulation

This code contains two simulations. These can be accessed from the UI.

### The problem

In a University, there is a classroom, in that classroom, there are 4 fluorescent tube units, each unit contains 4 fluorescent tubes.

The classroom is used 15 hours a day, 5 times a week, 9 months a year.

Every fluorescent tube works for a fixed amount of hours, that amount is returned by a function called "rand()" that returns an integer number from 100 to 200 that represents the number of hours that the fluorescent tube will work before breaking.

Once 2 fluorescent tubes fail in a single unit, you should replace all 4 tubes. Each fluorescent tube costs 7 $USD.

The algorithm should print:

1. How many fluorescent tubes were broken in 1 year in that classroom?
2. How much money do fluorescent tubes cost the University per year per classroom?

### Backend simulation

Backend simulation uses `/simulate` endpoint. It will only have one request and will perform the execution in backend.

### Frontend simulation

Frontend simulation simulates the problem in the frontend. But it uses the `purchase-new-unit` to simulate _"purchase"_ of a new unit.
This will return a unit with 4 tubes and its lifespan. This will call this api whenever a unit fails. That is, two of the four tubes in the unit are failed.
It will continue the process until the end of the year.

### Technologies

- Ruby Backend
- TypeScript, TailWindCSS frontend.

It is only tested in macOS.

### Installation

```sh
cd frontend && npm install && cd -
cd backend && bundle install && cd -
```

### Running

To run the frontend and backend servers together. Please use

```sh
./dev
```

then visit http://localhost:3000/

### testing

```sh
cd backend
bundle exec rspec
```
