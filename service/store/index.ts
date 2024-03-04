import { Store } from "../../model/store"

export default {
    getList : () : Store[] => {
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
    getBestList : () : Store[] => {
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
    }
}