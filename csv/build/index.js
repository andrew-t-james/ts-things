"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = __importDefault(require("./MatchReader"));
const Summary_1 = __importDefault(require("./Summary"));
const reader = MatchReader_1.default.fromCsv('football.csv');
const summary = Summary_1.default.winsAnalysisWithHtmlReport('Man United');
reader.load();
summary.buildAndPrintReport(reader.matches);
