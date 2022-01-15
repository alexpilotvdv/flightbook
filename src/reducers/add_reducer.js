import Mydb from "../interface/db"
const db = new Mydb
const SHOW_KALENDAR = 'SHOW_KALENDAR'
const SET_DATA = 'SET_DATA'
let currentDate = new Date()
let init = {
    colPolInInput: '', //количество полетов в поле ввода
    naletInput: '',
    data: currentDate,
    show: false,
    selectedType: '',
    typeDay:[],
    selectedPlane:'',
    planes:[],
    status:[],
    selectedStatus:'',
    meteo:[],
    selectedMeteo:'',
    showAlertRecord: false //показать окно предупреждения о записи
}

const addReducer = (state = init, action) => {
    let currentDate = new Date()
    switch (action.type) {
        case SHOW_KALENDAR: {
            // db.addTest(`SELECT value_day FROM day`).then(res => console.log('res: ', res),
            //     err => console.log('err: ', err))
            return { ...state, show: true, data: currentDate }
        }
        case 'RECORD_NEW': {
            console.log('RECORD_NEW')
            return { ...state, showAlertRecord: true } //показать окно предупреждения перед записью
        }
        case 'CHCOLPOL': {
            return { ...state, colPolInInput: action.value }
        }
        case 'CHNAL': {
            // не забыть потом перевести в минуты
            return{ ...state, naletInput: action.value}
        }

        case 'RECORD': {
            return { ...state, showAlertRecord: false } //непосредственно записать
        }
        case 'RECORD-CANCEL': {
            return { ...state, showAlertRecord: false } //непосредственно записать
        }
         case 'INIT-ALL': {
            //console.log('INIT-ALL: ',{ ...state, ...action.elements})
            return { ...state, ...action.elements }
         }
        case 'SET_TYPE':{
            //console.log('sel:',action.selected)
            return{...state, selectedType: action.selected}
        }
        case 'SET_PLANE':{
           // console.log('sel:',action.selected)
            return{...state, selectedPlane: action.selected}
        }
        case 'SET_STATUS':{
            // console.log('sel:',action.selected)
             return{...state, selectedStatus: action.selected}
         }
         case 'SET_METEO':{
            // console.log('sel:',action.selected)
             return{...state, selectedMeteo: action.selected}
         }
        case SET_DATA: {
            console.log('data:',action.data)
            return { ...state, show: false, data: action.data }
        }
        default: {
            return state
        }
    }
}

export default addReducer