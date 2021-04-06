export const list=()=>{
    // return {type: "LIST"}
    return async (dispatch, getState)=>{
        const response=await fetch("http://localhost:3001/sentences");
        const data=await response.json();
        return dispatch({type:"LIST",payload:data})
    }
};
