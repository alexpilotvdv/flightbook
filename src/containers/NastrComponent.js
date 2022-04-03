import React from 'react';
import Editbdscreen from '../components/nastr/Editbdscreen'
import { connect } from "react-redux";
// //import Mydb from "../interface/db";
// //import store from '../store/index'
// // import Main from '../components/Main'
import initDataNastr from './initfnastr'

const dbThunk = (table) => {
   // const db = new Mydb
    return (dispatch) => {
        initDataNastr(table).then(res => dispatch({type:'ISINIT', value:res}))
    }
}


const mapStateToProps =  (state) => {
   // console.log('container state:',state)
    return ({
        elements:state.nastr.elements  
    })
}

const mapDispatchToProps = (dispatch) => ({
   init: (table) => dispatch(dbThunk(table))
})
const NastrEdit = connect(mapStateToProps, mapDispatchToProps)(Editbdscreen)
export default NastrEdit