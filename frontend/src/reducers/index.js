const initState = {sentences: [],redirectTo: null}

const defaultReducer = (state=initState,action) =>{
    switch (action.type){
        case "LIST":
            return {...state,sentences:action.payload,redirectTo: null};
        case "CREATE":
            return {...state,redirectTo: "/"}
        case "UPDATE":
            return {...state,redirectTo: "/"}
        case "DELETE":
            const newSentences=state.sentences.filter((sentence)=>sentence.id!=action.payload)
            return {...state,sentences:newSentences,redirectTo:null}
        default:
            return state;
    }
};

export default defaultReducer;