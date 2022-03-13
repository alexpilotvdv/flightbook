
import Mydb from "../interface/db";
//необходима проверка. если первый запуск программы, то не инициализировать
const dbInit = async ()  => {
  console.log('3')
    let initD = {
        itogi:[],
        totalNalet:'',
        totalKolPol:''
    }
    console.log('0')
    const db = new Mydb
    let stat = await db.readFile('status')
    console.log('Mydb.status ', stat)
    if (stat === 'initok'){
      
  // initD.meteo = await db.addTest(`SELECT value, id FROM meteo`)
  initD.totalNalet = await totalNalet(db)
  initD.totalKolPol = await totalPoletov(db)
  initD.itogi = await itogi(db)
 // console.log('init: ',initD)
    }
    return initD
}

const itogi = async(db) => {
 // const db = new Mydb
  let total = await db.addTest(`SELECT plane.value, plane.id, SUM (minuts) FROM records, plane WHERE 
  plane.id = records.plane GROUP BY records.plane`)
  return total
}
const totalNalet = async(db) => {
   // const db = new Mydb
  let total = await db.addTest(`SELECT SUM (minuts) FROM records`)
  let t = total[0]['SUM (minuts)']
  let totalH = parseInt(t/60)
  let totalM = t % 60
  let rez= '' + totalH + ' часов ' + totalM + ' минут'
  //console.log('>>>>>>>: ',rez)
  return rez
}

const totalPoletov = async(db) => {
   // const db = new Mydb
    let total = await db.addTest(`SELECT SUM (colpol) FROM records`)
    let t = total[0]['SUM (colpol)']
    let rez= '' + t + ' полетов '
    return rez
  }
  export default dbInit