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
const express_1 = __importDefault(require("express"));
const store_1 = __importDefault(require("./controller/store"));
const mysql2_1 = __importDefault(require("mysql2"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send({ message: "welcome! 팝푱" });
});
app.get("/db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conntection = mysql2_1.default.createPool({
        host: 'localhost',
        user: 'root',
        password: '1111',
        database: 'poppiyong'
    });
    conntection.execute("SELECT * FROM store", (err, result, field) => {
        if (err)
            res.status(500).json({ message: "서버오류..." });
        res.send({
            list: result
        });
    });
    return;
}));
app.use("/store", store_1.default);
app.listen(5000, () => {
    console.log("SERVER OPEN!");
});
