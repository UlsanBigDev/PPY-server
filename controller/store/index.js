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
const store_1 = require("../../dao/store");
const route = express_1.default.Router();
const list = [];
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        list: yield store_1.storeDAO.getStore()
    });
}));
route.get("/hot", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        list: yield store_1.storeDAO.getHotStore()
    });
}));
route.patch("/:store_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { store_id } = req.params;
    const { name, manager_id } = req.body;
    console.log(store_id);
    const result = yield store_1.storeDAO.patchStore({ name, manager_id, store_id: parseInt(store_id) });
    res.status(200).send({ message: "성공적 패치", id: result });
}));
route.post("/addStore", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, manager_id } = req.body;
    // console.log(name, manager_id)
    const result = yield store_1.storeDAO.addStore(req.body);
    res.status(200).send({ message: "성공적 등록", result });
}));
exports.default = route;
