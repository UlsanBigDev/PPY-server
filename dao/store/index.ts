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
        console.log(result)
        return result
    }
}