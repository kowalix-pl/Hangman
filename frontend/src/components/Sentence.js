import { useDispatch } from 'react-redux';
import {remove} from '../actions/index.js';
import MaskedSentence from './MaskedSentence';
import SentenceActions from './SentenceActions.js';

const Sentence=(sentence)=>{
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        dispatch(remove(id));
    }
    return (
    <div className="sentence">
        <h3><MaskedSentence text={sentence.text}></MaskedSentence></h3>
        <SentenceActions id={sentence.id} handleDelete={handleDelete}></SentenceActions>
    </div>
    )
};

export default Sentence;