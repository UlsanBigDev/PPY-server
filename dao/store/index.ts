import mysql from 'mysql2/promise'
import { Store } from '../../model/store'

export const storeDAO = {
  connection: mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "poppiyong"
  }),
  getStore: async () => {
    const [result, field] = await storeDAO.connection.query("SELECT * FROM store")
    return result
  },
  getHotStore: async () => {
    const [result, field] = await storeDAO.connection.query("SELECT * FROM store  ORDER BY store_id DESC LIMIT 3")
    return result
  },
  addStore: async (store: Store) => {
    const { name, manager_id } = store;
    const sql = `INSERT INTO store SET name = "${name}", manager_id = "${manager_id}"`;
    const [result, field] = await storeDAO.connection.query(sql);
    return result;
  },
  patchStore: async ({ name, manager_id, store_id }: Store) => {
    const sql = `UPDATE store SET name = "${name}", manager_id = "${manager_id}" WHERE store_id = ${store_id}`;
    const [result, field] = await storeDAO.connection.query(sql);
    return result;
  }

}