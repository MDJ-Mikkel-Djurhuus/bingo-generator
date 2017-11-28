# bingo-generator (npm module)
A simple generator based on the old french game "Le Lotto" from 1778, featuring 27 squares in a layout of three rows and nine columns. Five squares in each row had numbers ranging from 1 through 90, which led to the modern design.

Unlike the original game, this generator has some extra features.

## Features
#### Winner/Loser
The generator allows you to pick a "winning" number, which will be used on every card/board. This can be used to let everybody win at the same time, by holding on to the winning number till all other numbers have been picked
#### Predefined / Smaller pool of numbers
The default pool of numbers:
```javascript
pool = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
];
```
The number pool can be configured in two ways, either by predefining a two-dimensional array to the config.pool or capping the pool of numbers per column with config.numbers_per_col

if numbers_per_col is defined each column will randomly pick x numbers from the default pool (only if config.pool isn't defined)
```javascript
numbers_per_col = 3; 
pool = [
    [1, 8, 9],
    [10, 11, 12,],
    [20, 22, 29],
    [33, 34, 39],
    [40, 41, 44,],
    [53, 54, 57,],
    [60, 62, 63,],
    [75, 76, 79],
    [80, 82, 90]
];
```

## Installation
npm install bingo-generator --save

## Usage
#### require
```javascript
var BingoGenerator = require("bingo-generator").default;
var generator = BingoGenerator();
generator.CreateBoard();
```
#### import
```javascript
import BingoGenerator from "bingo-generator";
let generator = BingoGenerator();
generator.CreateBoard();
```
#### parameters
```javascript
number_of_rows // default 3
number_of_cols // default 9
numbers_per_row // default 5
numbers_per_col // default 5
min_numbers_per_col // default 1
max_numbers_per_col // default 2
pool // default this.numberPool(numbers_per_col)
winner // defaull null
```
#### example
```javascript
import BingoGenerator from "bingo-generator";
let config = {
    numbers_per_row: 6,
    numbers_per_col: 4,
    winner: 15,
}
let generator = BingoGenerator(config);
```
resulting in the following config
```javascript
generator.config = {
    "number_of_rows": 3,
    "number_of_cols": 9,
    "numbers_per_col": 4,
    "numbers_per_row": 6,
    "min_numbers_per_col": 1,
    "max_numbers_per_col": 2,
    "pool": [
        [9, 3, 5, 2],
        [15, 10, 19, 11],
        [22, 20, 28, 24],
        [33, 36, 39, 32],
        [42, 45, 44, 48],
        [52, 59, 56, 57],
        [60, 68, 62, 65],
        [74, 70, 73, 77],
        [82, 80, 90, 83]
    ],
    "winner": 15
}
```
Calling createBoard() will return something like this
```javascript
console.log(generator.createBoard());
[ [ { col: 7, number: 73 },
    { col: 1, number: 15 },
    { col: 4, number: 45 },
    { col: 2, number: 22 },
    { col: 6, number: 60 },
    { col: 3, number: 39 } ],
  [ { col: 8, number: 80 },
    { col: 1, number: 10 },
    { col: 7, number: 70 },
    { col: 0, number: 3 },
    { col: 5, number: 52 },
    { col: 4, number: 48 } ],
  [ { col: 3, number: 32 },
    { col: 5, number: 57 },
    { col: 0, number: 5 },
    { col: 2, number: 24 },
    { col: 6, number: 68 },
    { col: 8, number: 82 } ] ]
```
 (with the winner defined, a board will always contain a cell with the winning number)
 
### Example of formatted board
generator.formatHTML()
![alt text](https://github.com/MDJ-Mikkel-Djurhuus/bingo-generator/raw/master/formatHTML.PNG "Bingo Bango!")

