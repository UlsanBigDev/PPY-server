import express from 'express'
import store from '../../service/store'
import { storeDAO } from '../../dao/store'
const route = express.Router()
const list: Object[] = []
route.get("/", async (req, res) => {
    res.send({
        list: await storeDAO.getStore()
    })
})

route.get("/hot", async (req, res) => {
    res.send({
        list: await storeDAO.getHotStore()
    })
})

route.patch("/:store_id", async (req, res) => {
    const { store_id } = req.params;
    const { name, manager_id } = req.body;
    console.log(store_id)

    const result = await storeDAO.patchStore({ name, manager_id, store_id: parseInt(store_id) });
    res.status(200).send({ message: "성공적 패치", id: result })
})


route.post("/addStore", async (req, res) => {
    const { name, manager_id } = req.body
    // console.log(name, manager_id)
    const result = await storeDAO.addStore(req.body)
    res.status(200).send({ message: "성공적 등록", result })
})


export default route