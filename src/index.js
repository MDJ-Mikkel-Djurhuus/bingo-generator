import { shuffle, htmlToElement } from "./utils"
import { cloneDeep } from "lodash"

export default function (config) {
    return new BingoGenerator(config);
}

class BingoGenerator {
    constructor({
        number_of_rows = 3,
        number_of_cols = 9,
        numbers_per_row = 5,
        numbers_per_col = 5,
        min_numbers_per_col = 1,
        max_numbers_per_col = 2,
        winner,
        pool = this.numberPool(numbers_per_col)
    }) {

        this.config = {
            number_of_rows,
            number_of_cols,
            numbers_per_col,
            numbers_per_row,
            min_numbers_per_col,
            max_numbers_per_col,
            pool,
            winner
        }
    }

    numberPool(numbers_per_col) {
        let pool = [
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
        pool.forEach(col => shuffle(col));
        return pool.map(col => col.splice(0, numbers_per_col));
    }

    CreateBoard() {
        let config = cloneDeep(this.config);
        let { number_of_rows, pool } = config;
        pool.forEach(col => shuffle(col));

        let rows = [];

        let tries = 0;
        while (rows.length < number_of_rows) {
            rows.push(this.row(rows, config));
            if (tries > 100) {
                throw "Impossible config";
            }
            tries++;
        }
        shuffle(rows)
        this.board = rows;
        return rows;
    }

    row(rows, config) {
        let { number_of_rows, pool, winner } = config;

        let cols = [];
        if (rows.length === number_of_rows - 1) {
            cols = this.determineCols(config, this.validate(rows, config));
        }
        else {
            cols = this.determineCols(config);
        }
        cols = cols.map(col => ({ col: col, number: pool[col].pop() }))
        if (winner) {
            if (rows.length < 1) {
                if (winner.length > 0) {
                    winner.forEach(number => {
                        this.setWinner(number, cols, pool);
                    });
                }
                else {
                    this.setWinner(winner, cols, pool);
                }
            }
        }
        return cols;
    }

    setWinner(winner, cols, pool) {
        let index = this.GetIndex(winner)
        let a = cols.filter(x => x.col === index);
        if (a[0]) {
            a[0].number = winner;
        }
        else {
            console.log(cols.splice(0, 1));
            cols.push({ col: index, number: winner })
        }
        pool[index] = pool[index].filter(x => x != winner)
    }

    GetIndex(number) {
        if (number == 90)
            return 8;
        return Math.floor(number / 10)
    }

    deleteRow(rows, pool) {
        let row = rows.pop();
        row.forEach(x => pool[x.col].push(x.number));
    }

    validate(rows, config) {
        let { numbers_per_row, min_numbers_per_col, max_numbers_per_col, pool } = config;

        let usedCols = rows.reduce((cur, next) => cur.concat(next), []).map(x => x.col);
        let required = [], blacklist = [];
        for (let i = 0; i < 9; i++) {
            let count = usedCols.filter(col => col === i).length;
            if (count < min_numbers_per_col) {
                required.push(i);
            }
            else if (count === max_numbers_per_col) {
                blacklist.push(i);
            }
        }

        if (required.length > numbers_per_row || blacklist.length > 9 - numbers_per_row) {
            this.deleteRow(rows, pool);
        }
        else {
            return { required, blacklist };
        }
    }

    determineCols(config, validate) {
        let { numbers_per_row } = config;

        let cols = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        if (validate) {
            let validated = [];
            validated = validate.required;

            validated.push(...cols
                .filter(col => !validate.blacklist.includes(col) && !validated.includes(col))
                .splice(0, numbers_per_row - validated.length))

            return validated;
        }
        else {
            return cols.splice(0, numbers_per_row);
        }
    }

    formatString() {

    }

    formatHTML() {
        let boardHTML = `<div class="board"></div>`;
        let board = htmlToElement(boardHTML);
        return board;
    }

}