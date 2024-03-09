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
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("../../dao/store");
exports.default = {
    getList: () => {
        // SELECT * FROM Store (임시)
        return [
            {
                managerId: "ptk5758",
                name: "Ulsan Big Dev",
                storeId: 1
            },
            {
                managerId: "ptk5758",
                name: "Ulsan Big Dev",
                storeId: 1
            },
            {
                managerId: "ptk5758",
                name: "Ulsan Big Dev",
                storeId: 1
            },
        ];
    },
    getBestList: () => {
        // SELECT * FROM Store ORDER BY Heart (임시)
        return [
            {
                managerId: "ptk5758",
                name: "Ulsan Big Dev",
                storeId: 1
            },
            {
                managerId: "ptk5758",
                name: "Ulsan Big Dev",
                storeId: 1
            },
            {
                managerId: "ptk5758",
                name: "Ulsan Big Dev",
                storeId: 1
            },
        ];
    },
    getStore: (store_id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield store_1.storeDAO.getStore(store_id);
    })
};
