import React from 'react';
import Newrecord from '../components/Newrecord';
import { connect } from "react-redux";
import Mydb from "../interface/db";
import store from '../store/index'

const dbNewRecordThunk = () => {
    return (dispatch) => {
        let toRecord = {
            data: 0,
            selectedType: '',
            selectedPlane:'',
            selectedStatus:'',
            selectedMeteo:'',
        }
        const db = new Mydb
        let state = store.getState()
        //console.log('store: ', state)
        //алгоритм: id = state.newrecord.meteo[state.newrecord.selectedMeteo].id
        toRecord.data = state.newrecord.data.getTime()
        toRecord.selectedType = state.newrecord.typeDay[state.newrecord.selectedType].id
        toRecord.selectedPlane = state.newrecord.planes[state.newrecord.selectedPlane].id
        toRecord.selectedStatus = state.newrecord.status[state.newrecord.selectedStatus].id
        toRecord.selectedMeteo = state.newrecord.meteo[state.newrecord.selectedMeteo].id
        console.log('store.data =  ', toRecord)
        //сдесь будет собираться объект с данными для записи
        dispatch({type: 'RECORD'})
    }
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
    }
    const db = new Mydb
    initD.typeDay = await db.addTest(`SELECT value, id FROM day`)
    initD.planes = await db.addTest(`SELECT value, id FROM plane`)
    initD.status = await db.addTest(`SELECT value, id FROM status`)
    initD.meteo = await db.addTest(`SELECT value, id FROM meteo`)
    return initD
}

const mapStateToProps = (state) => {
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
        showAlertRecord: state.newrecord.showAlertRecord
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
    recordCancel: () => dispatch({type:'RECORD-CANCEL'})
})
const ContAddrecord = connect(mapStateToProps, mapDispatchToProps)(Newrecord)

export default ContAddrecord