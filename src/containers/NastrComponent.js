import React from 'react';
import Editbdscreen from '../components/nastr/Editbdscreen'
import { connect } from "react-redux";
// //import Mydb from "../interface/db";
// //import store from '../store/index'
// // import Main from '../components/Main'
import initDataNastr from './initfnastr'
import addtobase from './addtobase'
import delfrombase from './deletefrombase'

const dbThunk = (table) => {
   // const db = new Mydb
    return (dispatch) => {
        initDataNastr(table).then(res => dispatch({type:'ISINIT', value:res}))
    }
}
const delThunk = (table,id) => {
    return (dispatch)=> {
       delfrombase(table,id)
       .then(res => initDataNastr(table))
       .then(res => dispatch({type:'ISINIT', value:res}))
    }
}
const addThunk = (table) => {
return (dispatch) => {
    addtobase(table)
    .then(res => initDataNastr(table))
    .then(res => dispatch({type:'ISINIT', value:res}))
}

 }

const mapStateToProps =  (state) => {
   // console.log('container state:',state)
    return ({
        elements:state.nastr.elements,
        showOkno:state.nastr.showOkno,
        showOknoAdd:state.nastr.showOknoAdd,
        dataForEdit:state.nastr.dataForEdit,
        dataForAdd:state.nastr.dataForAdd,
        idForEdit:state.nastr.idForEdit  
    })
}

const mapDispatchToProps = (dispatch) => ({
   init: (table) => dispatch(dbThunk(table)),
   showedit: (id,textToEdit) => dispatch({type:'SHOWEDIT',id:id,text:textToEdit}),
   closefn: ()=>dispatch({type:'CLOSEEDIT'}),
   chEdit: (val)=>dispatch({type:'CHEDIT',val:val}),
   chAdd: (val)=>dispatch({type:'CHEADD',val:val}),
   showAdd: ()=>dispatch({type:'SHOWADD'}),
   addNewToBase: (table) => dispatch(addThunk(table)),
   delFromBaseNastr: (table,id) => dispatch(delThunk(table,id))
})
const NastrEdit = connect(mapStateToProps, mapDispatchToProps)(Editbdscreen)
export default NastrEdit