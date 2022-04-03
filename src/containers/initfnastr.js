
import Mydb from "../interface/db";

const initDataNastr = async (table)  => {
    let initD = []
    
  
  const db = new Mydb
  const sql = `SELECT * FROM ${table}`
  const rezt = await db.addTest(sql)
  
  //проверим каждый элемент на наличие записей
  //чтобы поставить флаг, можно ли удалять элемент
 for(i=0;i<rezt.length;++i){
 let candel = await testDel(table,rezt[i].id) 
 initD.push({...rezt[i],canDelete:candel})
 }

    return initD
}

const testDel = async (table,id)=>{
  const db = new Mydb
  const sql = `SELECT * FROM records WHERE ${table} = ${id}`
  const rezt = await db.addTest(sql)
  if (rezt.length>0) {
    return false
  }
  else {
    return true
  }
}

  export default initDataNastr