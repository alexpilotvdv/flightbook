import store from '../store/index'
import Mydb from "../interface/db";

const addtobase = async(table) => {
  const state = store.getState()
  const db = new Mydb
  const sql = `INSERT INTO ${table} (value) values ('${state.nastr.dataForAdd}')`
  const rezt = await db.addTest(sql)
  return rezt
}
  
  export default addtobase