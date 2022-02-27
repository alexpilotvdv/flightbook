
import Mydb from "../interface/db";
import store from '../store/index'
import dbInit from './initf'
const newzap = async () => {
        let toRecord = {
            data: 0,
            selectedType: '',
            selectedPlane:'',
            selectedStatus:'',
            selectedMeteo:'',
            naletM:0,
            colpol:0
        }
        const db = new Mydb
        let state = store.getState()
        toRecord.data = state.newrecord.data.getTime()
        toRecord.selectedType = state.newrecord.typeDay[state.newrecord.selectedType].id
        toRecord.selectedPlane = state.newrecord.planes[state.newrecord.selectedPlane].id
        toRecord.selectedStatus = state.newrecord.status[state.newrecord.selectedStatus].id
        toRecord.selectedMeteo = state.newrecord.meteo[state.newrecord.selectedMeteo].id
        toRecord.naletM = state.newrecord.naletMinut
        toRecord.colpol = parseInt(state.newrecord.colPolInInput) 
        //запишем в базу
        await db.createInit(`INSERT INTO records (data, 
            day, plane, status, 
            meteo, other, minuts,colpol) 
        values (?,?,?,?,?,?,?,?)`,[toRecord.data,toRecord.selectedType,toRecord.selectedPlane,
        toRecord.selectedStatus,toRecord.selectedMeteo,'',toRecord.naletM,toRecord.colpol])
        let rez = await dbInit()
        return rez
    }
export default newzap