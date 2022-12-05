"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const keys_1 = __importDefault(require("./keys"));
var pool = mysql2_1.default.createPool(keys_1.default.database);
pool.getConnection(function (err, conn) {
    console.log('DB is connected');
});
exports.default = pool;
//# sourceMappingURL=database.js.map