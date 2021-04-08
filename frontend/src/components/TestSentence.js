import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Game from './Game';

const TestSentence  = () => {
    const {id}=useParams()
    const sentences=useSelector(state=>state.sentences);
    const currentSentence=sentences.find(sentence=>sentence.id==id);
    const text=currentSentence.text;
    return <Game text={text}></Game>
};

export default TestSentence;
