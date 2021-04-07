import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {remove} from '../actions/index.js';

const Sentence=(sentence)=>{
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        dispatch(remove(id));
    }
    return (
    <div className="sentence">
        <h3>{sentence.text}</h3>
        <Link className="link" to={'/edit/'+sentence.id}>Edit</Link>
        <Link className="link" to={'/test/'+sentence.id}>Test</Link>
        <button className="link" onClick={()=>handleDelete(sentence.id)}>Delete</button>

    </div>
    )
};

export default Sentence;