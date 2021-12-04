import Mydb from "../interface/db"
const db = new Mydb
const SHOW_KALENDAR = 'SHOW_KALENDAR'
const SET_DATA = 'SET_DATA'
let currentDate = new Date()
let init = {
    data: currentDate,
    show: false,
    selectedType: '',
    typeDay:[],
    selectedPlane:'',
    planes:[]
}

const addReducer = (state = init, action) => {
    let currentDate = new Date()
    switch (action.type) {
        case SHOW_KALENDAR: {
            // db.addTest(`SELECT value_day FROM day`).then(res => console.log('res: ', res),
            //     err => console.log('err: ', err))
            return { ...state, show: true, data: currentDate }
        }
        case 'INIT-DAY': {
            return { ...state, typeDay:action.days }
        }
        case 'INIT-PLANE': {
           // console.log('reducer',action.planes)
            return { ...state, planes:action.planes }
        }
        case 'SET_TYPE':{
            //console.log('sel:',action.selected)
            return{...state, selectedType: action.selected}
        }
        case 'SET_PLANE':{
           // console.log('sel:',action.selected)
            return{...state, selectedPlane: action.selected}
        }
        case SET_DATA: {
            db.readFile('status')
                .then(resolve => console.log('rez = ', resolve))
            return { ...state, show: false, data: action.data }
        }
        default: {
            return state
        }
    }
}

export default addReducer