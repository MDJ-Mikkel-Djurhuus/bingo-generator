# bingo-generator
![alt text](https://github.com/MDJ-Mikkel-Djurhuus/bingo-generator/raw/master/formatHTML.png "Bingo Bango!")

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

