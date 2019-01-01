"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var orderBy = function orderBy(data, fieldName, order) {
    if (data === void 0) {
        data = [];
    }
    if (fieldName === void 0) {
        fieldName = "";
    }
    if (order === void 0) {
        order = "ASC";
    }
    return data.sort(function (a, b) {
        if (order === "DESC") {
            return b[fieldName] > a[fieldName] ? 1 : a[fieldName] > b[fieldName] ? -1 : 0;
        }
        return a[fieldName] > b[fieldName] ? 1 : b[fieldName] > a[fieldName] ? -1 : 0;
    });
};
exports.default = orderBy;