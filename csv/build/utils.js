"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = (dateString) => {
    // 28/10/2018
    const dateParts = dateString
        .split('/')
        .map((val) => parseInt(val));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
