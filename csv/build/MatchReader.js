"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const CSVFileReader_1 = __importDefault(require("./CSVFileReader"));
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    static fromCsv(fileName) {
        return new MatchReader(new CSVFileReader_1.default(fileName));
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.default = MatchReader;
