import './App.css';
import { useStateValue } from './contextAPI/UserProvider';
import { useEffect } from 'react';
import { getUser } from './serverConnection/serverConnection';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Test from './components/test/Test';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [userInfo, dispatch] = useStateValue();

  useEffect(() => {
    getUser(dispatch);
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/">
            {
              userInfo.authenticated ?
                <Home /> :
                <Redirect to="/login" />
            }
          </Route> */}

          <Route path="/login">
            {
              !userInfo.authenticated ?
                <Login /> :
                <Redirect to="/" />
            }
          </Route>

          <Route path="/signup" component={Signup} />

          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;