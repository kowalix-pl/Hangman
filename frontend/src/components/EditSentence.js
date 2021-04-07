import {useParams} from "react-router-dom";
import { useRef } from "react";
import {update} from "../actions/index.js";
import { useDispatch, useSelector } from "react-redux";

const EditSentence = () => {
    const {id}=useParams()
    const sentences=useSelector(state=>state.sentences)
    const currentSentence=sentences.find(sentence=>sentence.id==id);
    const refContainer=useRef(null);
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(update(id,refContainer.current.value))
    }
    return (
     <div>
         <label htmlFor="editSentence"> Edit Sentence:</label>
         <input type="text" id="editSentence" ref={refContainer} defaultValue={currentSentence.text}></input>
         <button onClick={handleClick} type="button">Update</button>
     </div>
    )
};

export default EditSentence;
