"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = __importDefault(require("./MatchReader"));
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
const ConsolReporter_1 = __importDefault(require("./resultTarget/ConsolReporter"));
const Summary_1 = __importDefault(require("./Summary"));
const csvFileReader = new CsvFileReader_1.default('football.csv');
const reader = new MatchReader_1.default(csvFileReader);
reader.load();
const summary = new Summary_1.default(new WinsAnalysis_1.default('Man United'), new ConsolReporter_1.default());
summary.buildAndPrintReport(reader.matches);
