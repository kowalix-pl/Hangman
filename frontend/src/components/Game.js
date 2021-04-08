import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
import isLetter from '../util/isLetter';

const Game= (text) => { 
    const hiddenLetters=new Set();
    const handleKeyPress=(e)=>{
        if ((e.key.length==1) && (e.key!=" ")){
            const newLetter=e.key.toLowerCase();
            if (hiddenLetters.has(newLetter)){
                hiddenLetters.delete(newLetter)
                setParts(parts=>parts.map((part)=>{
                    if (part.letter.toLowerCase()==newLetter){
                        return {letter:part.letter,visible:true}
                    }
                    return part;
                }))  
                if (hiddenLetters.size==0){
                    console.log("You Win!")
                }  
            } 
        }
    }

useEffect(()=>{
        window.addEventListener("keyup",handleKeyPress)
        return ()=>{window.removeEventListener("keyup",handleKeyPress)}
    },[])
    const [parts,setParts]=useState(text.split("").map(letter=>{
        if (letter!=" ") hiddenLetters.add(letter.toLowerCase())
        return {letter:letter,visible:!isLetter(letter)}
    }))
    return (
       <div className="test">
         {parts.map((part,index)=>{
             return <div key={index} className="letter">{part.visible ? part.letter : ""}</div>
         })}
       </div>
       )
};

export default Game;