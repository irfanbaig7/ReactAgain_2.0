

const initalForm = { name: "", email: "", password: ""}  

function fromReducer(state, action) {
    switch (action.type) {
        case "CHANGE":
            return { ...state, [action.field]: action.value } 
            
        case "RESET":
            return initalForm;
    
        default:
            return state;
    }

    
}

export {initalForm, fromReducer}