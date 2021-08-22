import FetchIsues from "./Issues/FetchIsues";
import Navbar from "./Common/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from "./Common/LogIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LogIn />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/issues">
              <FetchIsues />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );  // return (<div><FetchIsues /></div>);
}

export default App;