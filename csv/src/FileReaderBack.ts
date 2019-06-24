import fs from 'fs';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from '../utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

// never gets instantiated with keyword new
abstract class CsvFileReader {
  data: MatchData[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}

export default CsvFileReader;
