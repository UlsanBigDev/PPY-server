"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const store_1 = __importDefault(require("./controller/store"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send({ message: "welcome! 팝푱" });
});
app.use("/store", store_1.default);
app.listen(5000, () => {
    console.log("SERVER OPEN!");
});
