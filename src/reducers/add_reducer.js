import Mydb from "../interface/db"
const db = new Mydb
const SHOW_KALENDAR = 'SHOW_KALENDAR'
const SET_DATA = 'SET_DATA'
let currentDate = new Date()
let init={
data:currentDate,
show:false
}
const addReducer=(state=init, action)=>{
    let currentDate = new Date()  
switch(action.type){
    case SHOW_KALENDAR:{
        db.recordFile('status','init')
        .then(resolve=>console.log('write ok'), reject=>console.log('error', reject))
       return {...state,show:true,data:currentDate}
    }
    case SET_DATA:{
        db.readFile('status')
        .then(resolve=>console.log('rez = ',resolve))
        return {...state,show:false,data:action.data}
    }
    default:{
        return state
    }
}
}

export default addReducer