//здесь будет обслуживаться все, что связано с настрйками
let init = {
  elements:[{id:'',value:'',canDelete:true}],
  showOkno:false, //показать/скрыть окно с редактированием
  dataForEdit:'',
  idForEdit:'',
  showOknoAdd:false, //показать окно добавления
  dataForAdd:'' //данные для добавления
}

const nastrreducer = (state = init, action) => {
    
    switch (action.type) {
        case 'ISINIT': {
          //  console.log('reducer ',action.value)
            return { ...state, 
                elements:action.value, 
                showOkno:false, 
                showOknoAdd:false,
                dataForEdit:'',
                dataForAdd:'', 
                  }
        }
        case 'SHOWEDIT': {
           // console.log('show ')
            return { ...state, showOkno:true,dataForEdit:action.text,
            idForEdit:action.id }
        }
        case 'CLOSEEDIT': {
            return { ...state, showOkno:false, showOknoAdd:false }
        }
        case 'SHOWADD': {
            return { ...state, showOknoAdd:true }
        }
        case 'CHEDIT': {
            return { ...state, dataForEdit:action.val}
        }
        case 'CHEADD': {
            return { ...state, dataForAdd:action.val} 
        }
        default: {
            return state
        }
    }
}

export default nastrreducer