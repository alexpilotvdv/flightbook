import addprovider from './addprovider'
import React from 'react'
import { connect } from "react-redux";
import Newrecord from '../components/Newrecord';

const ContAdd=(props)=>{
  //  console.log('props**********',props)
return(
    <Newrecord/>
)
}
// const mapStateToProps=(state)=>{
// console.log('state',state)
//     return  {
//     show: state.show
//  }
// }
   
//  const mapDispatchToProps = (dispatch)=>({
//      showCal: ()=>dispatch({action:'SHOW_KALENDAR'}),
   
//  })
//  const ContAdd =  connect(mapStateToProps,mapDispatchToProps)(Newrecord)

 //const ContAdd = addprovider(newrecordconnect)
 export default ContAdd