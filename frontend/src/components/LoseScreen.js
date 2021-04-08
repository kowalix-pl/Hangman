import {Link} from 'react-router-dom';

const LoseScreen=()=>{
    return <div className="end lose">
             <h1>Sorry you lost! :(</h1>
             <Link to="/">Go back</Link>
          </div>
}

export default LoseScreen;