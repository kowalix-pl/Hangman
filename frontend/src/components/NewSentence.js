import { useRef } from "react";
import {create} from "../actions/index.js";
import { useDispatch } from "react-redux";

const NewSentence = () => {
    const refContainer=useRef(null)
    const dispatch=useDispatch()
    const handleClick=()=>{
          
          dispatch(create(refContainer.current.value))
    }
    return (
     <div>
         <label htmlFor="newSentence"> New Sentence:</label>
         <input type="text" id="newSentence" ref={refContainer}></input>
         <button onClick={handleClick} type="button">Create</button>
     </div>
    )
};

export default NewSentence;