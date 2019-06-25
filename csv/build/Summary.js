"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
const HtmlReport_1 = __importDefault(require("./resultTarget/HtmlReport"));
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.default(team), new HtmlReport_1.default());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.default = Summary;
