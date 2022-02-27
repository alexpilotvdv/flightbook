import React from 'react';
import Newrecord from '../components/Newrecord';
import { connect } from "react-redux";
import Mydb from "../interface/db";
import store from '../store/index'
import Main from '../components/Main'
import dbInit from './initf'

const dbThunk = () => {
   // const db = new Mydb
    return (dispatch) => {
            dbInit().then(res => dispatch({type: 'INIT-ALL', elements: res}))
    }
}


const mapStateToProps =  (state) => {
    // console.log(state)
    return ({
        mainscreenItog: state.newrecord.mainscreenItog,
        totalNalet: state.newrecord.totalNalet,
        totalKolPol: state.newrecord.totalKolPol,
        itogi: state.newrecord.itogi
    })
}

const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch(dbThunk())
})
const MainScreen = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainScreen