import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {list} from "../actions/index.js";
import Sentence from "./Sentence.js";

const ListSentences = () => {
    const dispatch=useDispatch();
    const state=useSelector((state)=>state)
    useEffect(()=>{
        dispatch(list())
    },[])
    return (<div>{state.sentences.map((sentence)=>{
        return <Sentence key={sentence.id}  {...sentence}></Sentence>
    })}</div>)
};

export default ListSentences;