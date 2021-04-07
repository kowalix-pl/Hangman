import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const TestSentence  = () => {
    const {id}=useParams()
    const sentences=useSelector(state=>state.sentences);
    const currentSentence=sentences.find(sentence=>sentence.id==id);
    const text=currentSentence.text;
    
    const parts=text.split("");
    return (
       <div className="test">
         {parts.map((part,index)=>{
             return <div key={index} className="letter">{part}</div>
         })}
       </div>
       )
};

export default TestSentence;
