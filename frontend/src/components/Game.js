import { useEffect, useState } from "react";
import isLetter from '../util/isLetter';
import {Link} from 'react-router-dom';
import Hangman from './Hangman';
import WinScreen from './WinScreen';
import LoseScreen from './LoseScreen';

const Game= ({text}) => { 
    const [hasWon,setHasWon]= useState(false);
    const [mistakes,setMistakes]=useState(0);
    const MAX_MISTAKES=7;
    const hiddenLetters=new Set();
    const removeListener=()=>{window.removeEventListener("keyup",handleKeyPress)}
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
                    removeListener();
                    setHasWon(true);
                }  
            } else {
                setMistakes((mistakes)=>{
                    if ((mistakes+1)>=MAX_MISTAKES) removeListener();
                    return  mistakes+1
                });
            }  
        }
    }

    useEffect(()=>{
        window.addEventListener("keyup",handleKeyPress)
        return removeListener;
    },[])
    const [parts,setParts]=useState(text.split("").map(letter=>{
        if (isLetter(letter)) hiddenLetters.add(letter.toLowerCase())
        return {letter:letter,visible:!isLetter(letter)}
    }))
    return (
       <div className="test">
         <Hangman mistakes={mistakes}></Hangman>
         <div className="letterWrapper">{
             parts.map((part,index)=>{
               return <span key={index} className={(part.letter===" ") ? "letter-space" : "letter"}>{part.visible ? part.letter : ""}</span>
             })}
          </div>
         <br></br>
         {hasWon && <WinScreen></WinScreen>}
         {(mistakes>=MAX_MISTAKES) && <LoseScreen></LoseScreen>}
       </div>
       )
};

export default Game;
