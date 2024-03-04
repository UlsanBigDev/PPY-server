import express from 'express'
import {v4} from 'uuid'
import { Store } from '../../model/store'
import store from '../../service/store'
const route = express.Router()
route.get("/", (req,res) => {    
    res.send({
        list : store.getList()
    })
})
route.get("/best", (req,res) => {    
    res.send({
        list : store.getBestList()
    })
})
export default route