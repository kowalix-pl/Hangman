const initState = {sentences: [],redirectTo: null}

const defaultReducer = (state=initState,action) =>{
    switch (action.type){
        case "LIST":
            return {...state,sentences:action.payload,redirectTo: null};
        case "CREATE":
            return {...state,redirectTo: "/"}
        default:
            return state;
    }
};

export default defaultReducer;