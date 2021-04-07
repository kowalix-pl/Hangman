export const list=()=>{
   
    return async (dispatch, getState)=>{
        const response=await fetch("http://localhost:3001/sentences");
        const data=await response.json();
        return dispatch({type:"LIST",payload:data})
    }
};

export const create=(text)=>{

        return async (dispatch, getState)=>{
            const response=await fetch("http://localhost:3001/sentences",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({sentence:{text}})
            });
            const data=await response.json();
            return dispatch({type:"CREATE",payload:data})
        }
};

export const remove=(id)=>{

    return async (dispatch, getState)=>{
        const response=await fetch("http://localhost:3001/sentences/"+id,{
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
        });

        return dispatch({type:"DELETE",payload:id})
    }
};

export const update=(id,text)=>{

    return async (dispatch, getState)=>{
        const response=await fetch("http://localhost:3001/sentences/"+id,{
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({sentence:{text}})
        });
        const data=await response.json();
        return dispatch({type:"UPDATE",payload:data})
    }
};
