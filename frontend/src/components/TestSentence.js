import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";

const TestSentence  = () => {
    const {id}=useParams()
    const sentences=useSelector(state=>state.sentences);
    const currentSentence=sentences.find(sentence=>sentence.id==id);
    const text=currentSentence.text;
    
    const handleKeyPress=(e)=>{
        if ((e.key.length==1) && (e.key!=" ")){
            const newLetter=e.key.toLowerCase();
            setParts(parts=>parts.map((part)=>{
                if (part.letter.toLowerCase()==newLetter){
                    return {letter:part.letter,visible:true}
                }
                return part;
            }))    
        }
    }
    useEffect(()=>{
        window.addEventListener("keyup",handleKeyPress)
        return ()=>{window.removeEventListener("keyup",handleKeyPress)}
    },[])
    const [parts,setParts]=useState(text.split("").map(letter=>{
        return {letter:letter,visible:false}
    }))
    return (
       <div className="test">
         {parts.map((part,index)=>{
             return <div key={index} className="letter">{part.visible ? part.letter : ""}</div>
         })}
       </div>
       )
};

export default TestSentence;
