import mysql from "mysql2/promise"
export const storeDAO = {
    connection : mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '1111',
        database: 'poppiyong'
    }),
    getBook : async () => {
        const [result, field] = await storeDAO.connection.query("SELECT * FROM store")        
        return result
    },
    getStore : async (store_id : number) => {
        const query = `SELECT * FROM store, store_waiting WHERE store.store_id = ${store_id} AND store_waiting.store_id = ${store_id}`
        const [result, field] = await storeDAO.connection.query(query)
        console.log(query)
        return result
    }
}