const testSentences = [{id: 1, text: "first local sentence"},{id: 2, text: "second local sentence"},{id: 3, text: "third local sentence"}]
const initState = {sentences: testSentences}

const defaultReducer = (state=initState,action) =>{
    switch (action.type){
        case "LIST":
            return state;
        default:
            return state;
    }
};

export default defaultReducer;