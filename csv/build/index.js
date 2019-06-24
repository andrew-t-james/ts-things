"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// const csv = fs.readFileSync('./football.csv');
// console.log('csv:', Buffer.from(JSON.parse(csv).data));
fs_1.default.readFile('./football.csv', 'utf8', function (err, contents) {
    console.log(contents);
});
console.log('after calling readFile');
