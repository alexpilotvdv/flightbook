import React from 'react';
import Newrecord from '../components/Newrecord';
import { connect } from "react-redux";
import Mydb from "../interface/db";


const dbThunk = () => {
    const db = new Mydb
    return (dispatch) => {
        db.addTest(`SELECT value, id FROM day`)
            .then(res => dispatch({ type: 'INIT-DAY', days: res }))
        db.addTest(`SELECT value, id FROM plane`)
            .then(res => dispatch({ type: 'INIT-PLANE', planes: res }))
        db.addTest(`SELECT value, id FROM status`)
            .then(res => dispatch({ type: 'INIT-STATUS', status: res }))
        db.addTest(`SELECT value, id FROM meteo`)
            .then(res => dispatch({ type: 'INIT-METEO', meteo: res }))
            .catch(err => console.log('err: ', err))
    }
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
    record: ()=>dispatch({type:'RECORD'}),
    recordNew: () => dispatch({type:'RECORD_NEW'}) //перед записью вывести окно
})
const ContAddrecord = connect(mapStateToProps, mapDispatchToProps)(Newrecord)

export default ContAddrecord