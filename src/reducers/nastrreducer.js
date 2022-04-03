//здесь будет обслуживаться все, что связано с настрйками
let init = {
  elements:[{id:'',value:'',canDelete:true}],
  showOkno:false,
}

const nastrreducer = (state = init, action) => {
    
    switch (action.type) {
        case 'ISINIT': {
            console.log('reducer ',action.value)
            return { ...state, elements:action.value }
        }
      
        default: {
            return state
        }
    }
}

export default nastrreducer