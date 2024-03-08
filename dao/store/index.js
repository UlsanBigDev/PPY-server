"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeDAO = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
exports.storeDAO = {
    connection: promise_1.default.createPool({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "poppiyong"
    }),
    getStore: () => __awaiter(void 0, void 0, void 0, function* () {
        const [result, field] = yield exports.storeDAO.connection.query("SELECT * FROM store");
        return result;
    }),
    getHotStore: () => __awaiter(void 0, void 0, void 0, function* () {
        const [result, field] = yield exports.storeDAO.connection.query("SELECT * FROM store  ORDER BY store_id DESC LIMIT 3");
        return result;
    }),
    addStore: (store) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, manager_id } = store;
        const sql = `INSERT INTO store SET name = "${name}", manager_id = "${manager_id}"`;
        const [result, field] = yield exports.storeDAO.connection.query(sql);
        return result;
    }),
    patchStore: ({ name, manager_id, store_id }) => __awaiter(void 0, void 0, void 0, function* () {
        const sql = `UPDATE store SET name = "${name}", manager_id = "${manager_id}" WHERE store_id = ${store_id}`;
        const [result, field] = yield exports.storeDAO.connection.query(sql);
        return result;
    })
};
