import { useEffect, useState } from "react";
import isLetter from '../util/isLetter';
import {Link} from 'react-router-dom';

const Game= ({text}) => { 
    const [hasWon,setHasWon]= useState(false);
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
                    setHasWon(true);
                    console.log("You Won")
                }  
            } 
        }
    }

    useEffect(()=>{
        window.addEventListener("keyup",handleKeyPress)
        return ()=>{window.removeEventListener("keyup",handleKeyPress)}
    },[])
    const [parts,setParts]=useState(text.split("").map(letter=>{
        if (isLetter(letter)) hiddenLetters.add(letter.toLowerCase())
        return {letter:letter,visible:!isLetter(letter)}
    }))
    return (
       <div className="test">
         <div className="letterWrapper">{
             parts.map((part,index)=>{
               return <span key={index} className="letter">{part.visible ? part.letter : ""}</span>
             })}
          </div>
         <br></br>
         {hasWon && <div className="win">
             <h1>Congratulations you won!</h1>
             <Link to="/">Go back</Link>
         </div>}
       </div>
       )
};

export default Game;
