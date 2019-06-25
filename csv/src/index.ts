import MatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';
import WinsAnalysis from './analyzers/WinsAnalysis';
import ConsoleReport from './resultTarget/ConsolReporter';
import Summary from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvFileReader);
reader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(reader.matches);
