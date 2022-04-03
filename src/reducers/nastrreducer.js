//здесь будет обслуживаться все, что связано с настрйками
let init = {
  elements:[{id:'',value:'',canDelete:true}],
  showOkno:false, //показать/скрыть окно с редактированием
  dataForEdit:'',
  idForEdit:''

}

const nastrreducer = (state = init, action) => {
    
    switch (action.type) {
        case 'ISINIT': {
          //  console.log('reducer ',action.value)
            return { ...state, elements:action.value }
        }
        case 'SHOWEDIT': {
           // console.log('show ')
            return { ...state, showOkno:true,dataForEdit:action.text,
            idForEdit:action.id }
        }
        case 'CLOSEEDIT': {
            return { ...state, showOkno:false }
        }
        case 'CHEDIT': {
            return { ...state, dataForEdit:action.val}
        }
      
        default: {
            return state
        }
    }
}

export default nastrreducer