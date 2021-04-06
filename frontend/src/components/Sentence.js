import {Link} from 'react-router-dom';

const Sentence=(sentence)=>{
    return (
    <div className="sentence">
        <h3>{sentence.text}</h3>
        <Link className="link" to={'/edit/'+sentence.id}>Edit</Link>
        <Link className="link" to={'/test/'+sentence.id}>Test</Link>
    </div>
    )
};

export default Sentence;