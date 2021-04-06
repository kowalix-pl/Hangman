import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {list} from "../actions/index.js";

const ListSentences = () => {
    const dispatch=useDispatch();
    const state=useSelector((state)=>state)
    useEffect(()=>{
        dispatch(list())
    },[])
    return (<div>{state.sentences.map((sentence)=>{
        return <div key={sentence.id}>{sentence.text}</div>
    })}</div>)
};

export default ListSentences;