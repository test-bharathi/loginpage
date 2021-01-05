import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">FirstPage</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />


        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function FirstPage() {

    return (
            <div> <b>Welcome to SportsClub</b>
                <div className='image'>
                    <div className='centered'>
                        <div>
                            <button type='submit'> <b> SignUp </b></button>
                        </div>
                        <div>
                            <button type='submit'> <b> Register</b></button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default BasicExample