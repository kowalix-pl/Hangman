import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import TestSentence from "./components/TestSentence.js";
import EditSentence from "./components/EditSentence.js";
import NewSentence from "./components/NewSentence.js";

const App = () => {
  return (
    <Router> 
      <Switch>
        <Route exact path="/">
          <div>Home Page</div>
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
