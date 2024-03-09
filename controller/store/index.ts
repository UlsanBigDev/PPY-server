import express from 'express'
import {v4} from 'uuid'
import { Store } from '../../model/store'
import store from '../../service/store'
import { storeDAO } from '../../dao/store'
const route = express.Router()
route.get("/", async (req,res) => {    
    res.send({
        list : await storeDAO.getBook()
    })
})
route.get("/:store_id", async (req,res) => {    
    const { store_id } = req.params
    res.send({
        list : await store.getStore(parseInt(store_id))
    })
})
export default route