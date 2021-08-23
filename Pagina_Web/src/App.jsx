import FetchIsues from "./Issues/FetchIsues";
import Navbar from "./Common/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from "./Common/LogIn";

function App() {
  return (
    <Router>
      <div className="bg-customClearGrey grid grid-cols-5 grid-rows-7 auto-cols-fr h-screen">
        <Navbar />
        <LogIn />
        <div className="row-span-6 col-span-4">
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