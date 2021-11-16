import React from 'react';
import Newrecord from '../components/Newrecord';
import { connect } from "react-redux";

const mapStateToProps=(state)=>{
  //  console.log('mapst',state)
    return  ({
    show: state.newrecord.show,
    data: state.newrecord.data,
    datatxt: state.newrecord.data.toLocaleString() 
 })
}
   
 const mapDispatchToProps = (dispatch)=>({
     setDate: (dt)=>dispatch({type:'SET_DATA', data:dt}),
     openDataTrue: ()=>dispatch({type:'SHOW_KALENDAR'}),
 })
const ContAddrecord =  connect(mapStateToProps,mapDispatchToProps)(Newrecord)

export default ContAddrecord