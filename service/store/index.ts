import { storeDAO } from "../../dao/store"
import { Store } from "../../model/store"

export default {
    getList : () => {
        // SELECT * FROM Store (임시)
        return [
            {
                managerId : "ptk5758",
                name : "Ulsan Big Dev",
                storeId : 1
            },
            {
                managerId : "ptk5758",
                name : "Ulsan Big Dev",
                storeId : 1
            },
            {
                managerId : "ptk5758",
                name : "Ulsan Big Dev",
                storeId : 1
            },
        ]
    },
    getBestList : () => {
        // SELECT * FROM Store ORDER BY Heart (임시)
        return [
            {
                managerId : "ptk5758",
                name : "Ulsan Big Dev",
                storeId : 1
            },
            {
                managerId : "ptk5758",
                name : "Ulsan Big Dev",
                storeId : 1
            },
            {
                managerId : "ptk5758",
                name : "Ulsan Big Dev",
                storeId : 1
            },
        ]
    },
    getStore : async (store_id : number) => {
        return await storeDAO.getStore(store_id)
    }
    
}