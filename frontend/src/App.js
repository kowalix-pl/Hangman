import './App.css';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
import TestSentence from "./components/TestSentence.js";
import EditSentence from "./components/EditSentence.js";
import NewSentence from "./components/NewSentence.js";
import ListSentences from "./components/ListSentences.js";
import { useSelector } from 'react-redux';

const App = () => {
  const redirectTo= useSelector(state=>state.redirectTo)
  return (
    <Router> 
      {redirectTo && <Redirect to={redirectTo}></Redirect>}
      <h1 className="gameTitle">* Hangman Game *</h1>
       <nav>
        <Link to="/">List</Link><br/>
        <Link to="/new">New Sentence</Link><br/>
       </nav>
    
      <Switch>
        <Route exact path="/">
          <ListSentences></ListSentences>
        </Route>
        <Route path="/test/:id" children={<TestSentence></TestSentence>}></Route>
        <Route path="/new"><NewSentence></NewSentence></Route>
        <Route path="/edit/:id" children={<EditSentence></EditSentence>}></Route>
        <Route path="*">Unknown Route</Route>
      </Switch>
    </Router>
  );

}

export default App;
