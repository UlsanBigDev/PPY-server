"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const store_1 = __importDefault(require("../../service/store"));
const route = express_1.default.Router();
route.get("/", (req, res) => {
    res.send({
        list: store_1.default.getList()
    });
});
route.get("/best", (req, res) => {
    res.send({
        list: store_1.default.getBestList()
    });
});
exports.default = route;
