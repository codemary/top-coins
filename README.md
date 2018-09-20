## Introduction

Welcome to Top Coins webapp. 

The app aims at presenting top coins data through a table and a Scatter Plot Chart. 

## Install, Test & Run

```
$ yarn install
$ yarn start
$ yarn test
```

## Component Design

![](componentDesign.png) 

- __App Component__: Controls navigation and is responsible for passing real-time data to nav-items.

The App Component uses two main components:

- __MarketOverview Component__: Renders a table with data received from ticker api.
- __LiquidityAnalysis Component__: Renders an interactive Scatter Chart to show the market cap, volume and price change of each coin. 

Components for customization and code simplicity:

- __MarketOverviewRow Component__: Passes real-time data as props to the table.
- __CustomTooltip Component__: To customize tooltips for the Scatter Plot Chart. 

## Technical Choices

__Frontend Framework__: As mentioned in the requirements, I have used React to build this app.

__UI Framework__: react-bootstrap has been used to make the app responsible. In some places I have written my own css classes to get the desired results and avoid conflicts. 

__Charts__: recharts have been used for their amaizing customization options.

__Testing__: enzyme, react-test-renderer, jest and chai have been used for testing dependencies. 


## Roadmap

- A better visual design.
- Evaluate Redux for state management.
- Refractor App.js.
- Use asynchoronous task to update ticker data every n seconds.