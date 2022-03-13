console.log('start reducer')
//import Mydb from "../interface/db"
//const db = new Mydb
const SHOW_KALENDAR = 'SHOW_KALENDAR'
const SET_DATA = 'SET_DATA'
let currentDate = new Date()
let init = {
    colPolInInput: '', //количество полетов в поле ввода
    naletInput: '', //налет в окне ввода
    naletMinut: 0, //налет в форме для хранения в бд (в минутах)
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
    showAlertRecord: false, //показать окно предупреждения о записи
    totalNalet:'',
    totalKolPol:'',
    mainscreenItog:[]
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
            /*если длина строки = 1 и не число - заменитьна ''
            иначе проверить крайний символ в строке на число isNaN(testValue)
            если не число, то обрезать крайний символ и проверить 
            в получившейся строке есть ли точка
            если точки нет то
            заменить крайний символ на точку () в naletInput иначе заменить на ''
            если число то
            перевести в массив с разделителем .
            если число элементов меньше двух
            то naletMinut = перевести в минуты (0 элемент массива * 60) .
            иначе naletMinut = 0 элемент массива * 60 + первый элемент
            */
           let testStr = action.value
           if (testStr.length === 1 && isNaN(testStr.slice(-1))) {
            return {  ...state, naletInput: '', naletMinut: 0}
           } else if (isNaN(testStr.slice(-1))) {
            testStr = testStr.slice(0,-1)
               if (!testStr.includes('.')) {
                let newtestStr = testStr + '.'
                let nalmin = parseInt(testStr) * 60
                return {  ...state, naletInput: newtestStr, naletMinut: nalmin}
               } else {
                return {  ...state, naletInput: testStr}
               }
           } else {
             //крайний элемент не символ разбить подстроку и посчитать налет
             if(testStr.includes('.')){
                let massiv = testStr.split('.')
                let nalmin = parseInt(massiv[0]) * 60 + parseInt(massiv[1])
                return {  ...state, naletInput: testStr, naletMinut: nalmin}
             } else {
                let nalmin = parseInt(testStr) * 60
                return {  ...state, naletInput: testStr, naletMinut: nalmin}
             }

           
           }

            
        }

        case 'RECORD': {
            return { ...state, showAlertRecord: false } //непосредственно записать
        }
        case 'RECORD-CANCEL': {
            return { ...state, showAlertRecord: false } //непосредственно записать
        }
         case 'INIT-ALL': {
           // console.log('INIT-ALL: ',state)
            return { ...state, ...action.elements, showAlertRecord: false }
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
           // console.log('data:',action.data)
            return { ...state, show: false, data: action.data }
        }
        default: {
            return state
        }
    }
}

export default addReducer