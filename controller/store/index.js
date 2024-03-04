"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const route = express_1.default.Router();
const list = [];
// 모든 상점 조회
route.get("", (req, res) => {
    res.send({
        list: list
    });
});
// 상점 등록
route.post("/register", (req, res) => {
    const { memberID, addr1, addr2, tag } = req.body;
    if (!memberID || !addr1 || !addr2)
        return res.status(400).json({ message: "누락된 항목이 존재합니다." });
    const storeID = (0, uuid_1.v4)();
    list.push({
        storeID,
        memberID,
        addr1,
        addr2,
        tag: tag ? tag : ""
    });
    return res.status(201).json({ message: "등록이 정상적으로 완료 되었습니다.", storeID });
});
// 모든 조회 Store 조회 api 임시
route.get("/test-store", (req, res) => {
    res.send({
        list: [
            {
                store_id: 1,
                sort: "?",
                store_name: "이케아 팝업스토어"
            },
            {
                store_id: 1,
                sort: "?",
                store_name: "이케아 팝업스토어"
            },
            {
                store_id: 1,
                sort: "?",
                store_name: "이케아 팝업스토어"
            },
            {
                store_id: 1,
                sort: "?",
                store_name: "이케아 팝업스토어"
            },
            {
                store_id: 1,
                sort: "?",
                store_name: "이케아 팝업스토어"
            }, {
                store_id: 1,
                sort: "?",
                store_name: "이케아 팝업스토어"
            },
        ]
    });
});
// 상점 하나만 조회
route.get("/:id", (req, res) => {
    res.send({ message: "store API 3" });
});
// 상점 수정
route.put("/:id", (req, res) => {
    res.send({ message: "store API 4" });
});
// 상점 비활성화
route.patch("/:id/deactivate", (req, res) => {
    res.send({ message: "store API 5" });
});
exports.default = route;