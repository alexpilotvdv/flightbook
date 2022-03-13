import React from 'react';
import Newrecord from '../components/Newrecord';
import { connect } from "react-redux";
import Mydb from "../interface/db";
//import store from '../store/index'
import newzap from './recordzapis';


const dbNewRecordThunk = () => {
    return (dispatch) => {
        newzap().then(res => dispatch({type: 'INIT-ALL', elements: res}))
    }
    
    // return (dispatch) => {
    //     let toRecord = {
    //         data: 0,
    //         selectedType: '',
    //         selectedPlane:'',
    //         selectedStatus:'',
    //         selectedMeteo:'',
    //         naletM:0,
    //         colpol:0
    //     }
    //     const db = new Mydb
    //     let state = store.getState()
    //     //console.log('store: ', state)
    //     //алгоритм: id = state.newrecord.meteo[state.newrecord.selectedMeteo].id
    //     toRecord.data = state.newrecord.data.getTime()
    //     toRecord.selectedType = state.newrecord.typeDay[state.newrecord.selectedType].id
    //     toRecord.selectedPlane = state.newrecord.planes[state.newrecord.selectedPlane].id
    //     toRecord.selectedStatus = state.newrecord.status[state.newrecord.selectedStatus].id
    //     toRecord.selectedMeteo = state.newrecord.meteo[state.newrecord.selectedMeteo].id
    //     toRecord.naletM = state.newrecord.naletMinut
    //     toRecord.colpol = parseInt(state.newrecord.colPolInInput) 
    //     //console.log('store.data =  ', toRecord)
    //     //запишем в базу
    //     db.createInit(`INSERT INTO records (data, 
    //         day, plane, status, 
    //         meteo, other, minuts,colpol) 
    //     values (?,?,?,?,?,?,?,?)`,[toRecord.data,toRecord.selectedType,toRecord.selectedPlane,
    //     toRecord.selectedStatus,toRecord.selectedMeteo,'',toRecord.naletM,toRecord.colpol]).then(
    //        dispatch({type: 'RECORD'})
          
    //     )
        
    // }
}

const dbThunk = () => {
    const db = new Mydb
    return (dispatch) => {
            dbInit().then(res => dispatch({type: 'INIT-ALL', elements: res}))
    }
}

const dbInit = async ()  => {
    let initD = {
        typeDay:[],
        planes:[],
        status:[],
        meteo:[],
        totalNalet:'',
        totalKolPol:''
    }
    const db = new Mydb
    initD.typeDay = await db.addTest(`SELECT value, id FROM day`)
    initD.planes = await db.addTest(`SELECT value, id FROM plane`)
    initD.status = await db.addTest(`SELECT value, id FROM status`)
    initD.meteo = await db.addTest(`SELECT value, id FROM meteo`)
    initD.totalNalet = await totalNalet()
    initD.totalKolPol = await totalPoletov()
  console.log('init: ',initD)
    return initD
}

const totalNalet = async() => {
    const db = new Mydb
  let total = await db.addTest(`SELECT SUM (minuts) FROM records`)
  let t = total[0]['SUM (minuts)']
  let totalH = parseInt(t/60)
  let totalM = t % 60
  let rez= '' + totalH + ' часов ' + totalM + ' минут'
 // console.log('>>>>>>>: ',rez)
  return rez
}

const totalPoletov = async() => {
    const db = new Mydb
    let total = await db.addTest(`SELECT SUM (colpol) FROM records`)
    let t = total[0]['SUM (colpol)']
    let rez= '' + t + ' полетов '
    return rez
  }

const mapStateToProps =  (state) => {
    // console.log(state)
  
    return ({
        show: state.newrecord.show,
        data: state.newrecord.data,
        datatxt: state.newrecord.data.toLocaleString(),
        selectedType: state.newrecord.selectedType,
        typeDay: state.newrecord.typeDay,
        planes: state.newrecord.planes,
        selectedPlane: state.newrecord.selectedPlane,
        status: state.newrecord.status,
        selectedStatus: state.newrecord.selectedStatus,
        meteo: state.newrecord.meteo,
        selectedMeteo: state.newrecord.selectedMeteo,
        showAlertRecord: state.newrecord.showAlertRecord,
        colPolInInput: state.newrecord.colPolInInput,
        naletInput: state.newrecord.naletInput,
        naletMinut: state.newrecord.naletMinut,
        totalNalet: state.newrecord.totalNalet,
        totalKolPol: state.newrecord.totalKolPol
    })
}

const mapDispatchToProps = (dispatch) => ({
    setDate: (dt) => dispatch({ type: 'SET_DATA', data: dt }),
    openDataTrue: () => dispatch({ type: 'SHOW_KALENDAR' }),
    init: () => dispatch(dbThunk()),
    setType: (val) => dispatch({ type: 'SET_TYPE', selected: val }),
    setPlane: (val) => dispatch({ type: 'SET_PLANE', selected: val }),
    setStatus: (val) => dispatch({ type: 'SET_STATUS', selected: val }),
    setMeteo: (val) => dispatch({ type: 'SET_METEO', selected: val }),
    record: ()=>dispatch(dbNewRecordThunk()),
    recordNew: () => dispatch({type:'RECORD_NEW'}), //перед записью вывести окно
    recordCancel: () => dispatch({type:'RECORD-CANCEL'}),
    chColPol: (val) => dispatch({type:'CHCOLPOL', value: val}),
    chNalet: (val) => dispatch({type:'CHNAL', value: val})
})
const ContAddrecord = connect(mapStateToProps, mapDispatchToProps)(Newrecord)

export default ContAddrecord