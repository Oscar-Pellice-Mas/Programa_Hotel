import Navbar from "./Common/Navbar";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from "./Common/LogIn";
import NewIssueView from "./Issues/NewIssueView";

function App() {
  return (
    <Router>
      <div className="bg-customClearGrey grid grid-cols-5 grid-rows-6 auto-cols-fr h-screen">
        <Navbar />
        <LogIn />
        <div className="row-span-5 col-span-4">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/newIssue">
              <NewIssueView />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );  // return (<div><FetchIsues /></div>);
}

export default App;