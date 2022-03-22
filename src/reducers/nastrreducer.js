//здесь будет обслуживаться все, что связано с настрйками
let init = {
  elements:[{nameel:'',id:'',canDelete:true}],
  showOkno:false,
}

const nastrreducer = (state = init, action) => {
    
    switch (action.type) {
        case 'SHOW_KALENDAR': {
            return { ...state }
        }
      
        default: {
            return state
        }
    }
}

export default nastrreducer