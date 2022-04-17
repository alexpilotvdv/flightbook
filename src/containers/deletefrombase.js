//import store from '../store/index'
import Mydb from "../interface/db";

const delfrombase = async(table,id) => {
  //const state = store.getState()
  const db = new Mydb
  const sql = `DELETE FROM ${table} WHERE id = ${id}`
  const rezt = await db.addTest(sql)
  return rezt
}
  
  export default delfrombase