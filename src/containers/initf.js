
import Mydb from "../interface/db";
const dbInit = async ()  => {
    let initD = {
        itogi:[],
        totalNalet:'',
        totalKolPol:''
    }
    const db = new Mydb
   // initD.meteo = await db.addTest(`SELECT value, id FROM meteo`)
    initD.totalNalet = await totalNalet()
    initD.totalKolPol = await totalPoletov()
    initD.itogi = await itogi()
   // console.log('init: ',initD)
    return initD
}

const itogi = async() => {
  const db = new Mydb
  let total = await db.addTest(`SELECT plane.value, plane.id, SUM (minuts) FROM records, plane WHERE 
  plane.id = records.plane GROUP BY records.plane`)
  return total
}
const totalNalet = async() => {
    const db = new Mydb
  let total = await db.addTest(`SELECT SUM (minuts) FROM records`)
  let t = total[0]['SUM (minuts)']
  let totalH = parseInt(t/60)
  let totalM = t % 60
  let rez= '' + totalH + ' часов ' + totalM + ' минут'
  //console.log('>>>>>>>: ',rez)
  return rez
}

const totalPoletov = async() => {
    const db = new Mydb
    let total = await db.addTest(`SELECT SUM (colpol) FROM records`)
    let t = total[0]['SUM (colpol)']
    let rez= '' + t + ' полетов '
    return rez
  }
  export default dbInit