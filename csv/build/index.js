"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = __importDefault(require("./MatchReader"));
const MatchResult_1 = require("./MatchResult");
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const csvFileReader = new CsvFileReader_1.default('football.csv');
const reader = new MatchReader_1.default(csvFileReader);
reader.load();
let manUnitedWins = 0;
for (let match of reader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United wins ${manUnitedWins}`);
