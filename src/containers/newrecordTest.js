import React from 'react';
import Newrecord from '../components/Newrecord';
import {connect} from "react-redux";
import Mydb from "../interface/db";


const dbThunk = () => {
    const db = new Mydb
    return (dispatch) => {
        db.addTest(`SELECT value_day, id_day FROM day`)
            .then(res => dispatch({type: 'INIT', days: res}),
                err => console.log('err: ', err))
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        show: state.newrecord.show,
        data: state.newrecord.data,
        datatxt: state.newrecord.data.toLocaleString(),
        selectedType: state.newrecord.selectedType,
        typeDay: state.newrecord.typeDay
    })
}

const mapDispatchToProps = (dispatch) => ({
    setDate: (dt) => dispatch({type: 'SET_DATA', data: dt}),
    openDataTrue: () => dispatch({type: 'SHOW_KALENDAR'}),
    init: ()=>dispatch(dbThunk()),
    setType: (val) => dispatch({type: 'SET_TYPE', selected: val})
})
const ContAddrecord = connect(mapStateToProps, mapDispatchToProps)(Newrecord)

export default ContAddrecord