## Install, Test & Run

```
$ yarn install
$ yarn start
$ yarn test
```

## Introduction

Welcome to Top Coins webapp. 

The app aims at presenting top coins data through a table and a Scatter Plot Chart. 

## Problem and Solution



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



## Roadmap