import React from 'react';
import Newrecord from '../components/Newrecord';
import { connect } from "react-redux";
import Mydb from "../interface/db";
import store from '../store/index'
import Main from '../components/Main'


const dbThunk = () => {
    const db = new Mydb
    return (dispatch) => {
            dbInit().then(res => dispatch({type: 'INIT-ALL', elements: res}))
    }
}

const dbInit = async ()  => {
    let initD = {
        itogi:[],
        totalNalet:'',
        totalKolPol:''
    }
    const db = new Mydb
   // initD.meteo = await db.addTest(`SELECT value, id FROM meteo`)
    initD.totalNalet = await totalNalet()
    initD.totalKolPol = await totalPoletov()
  //  console.log('init: ',initD)
    return initD
}

const totalNalet = async() => {
    const db = new Mydb
  let total = await db.addTest(`SELECT SUM (minuts) FROM records`)
  let t = total[0]['SUM (minuts)']
  let totalH = parseInt(t/60)
  let totalM = t % 60
  let rez= '' + totalH + ' часов ' + totalM + ' минут'
  console.log('>>>>>>>: ',rez)
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
        mainscreenItog: state.newrecord.mainscreenItog,
        totalNalet: state.newrecord.totalNalet,
        totalKolPol: state.newrecord.totalKolPol
    })
}

const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch(dbThunk())
})
const MainScreen = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainScreen