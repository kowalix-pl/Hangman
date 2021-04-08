import {Link} from 'react-router-dom';

const SentenceActions=({id,handleDelete})=>{
  return (<>
        <Link className="link" to={`/edit/${id}`}>Edit</Link>
        <Link className="link" to={`/test/${id}`}>Test</Link>
        <button className="link" onClick={()=>handleDelete(id)}>Delete</button>
  </>)
}

export default SentenceActions;