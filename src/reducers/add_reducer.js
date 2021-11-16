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
       return {...state,show:true,data:currentDate}
    }
    case SET_DATA:{
        return {...state,show:false,data:action.data}
    }
    default:{
        return state
    }
}
}

export default addReducer