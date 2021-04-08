import {Link} from 'react-router-dom';

const WinScreen=()=>{
    return <div className="end win">
             <h1>Congratulations you won! :)</h1>
             <Link to="/">Go back</Link>
          </div>
}

export default WinScreen;