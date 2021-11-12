import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Index from './components/Index.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import EmployeeAll from './components/employees/EmployeeAll.jsx';
import EmployeeView from './components/employees/EmployeeView.jsx';
import EmployeeEdit from './components/employees/EmployeeEdit.jsx';
import EmployeeCreate from './components/employees/EmployeeCreate.jsx';
import { api } from './services/api.js';

function App() {
  const [state, setState] = useState({token: "", username: ""});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if(token && username) {
      setState(prevState => ({...prevState, username: username, token: token}))
    } else {
      localStorage.clear()
    }
  }, []);

  const login = data => {
    return api.login_service.login(data)
    .then(data => {
      localStorage.setItem("username", data.email);
      return setState(prevState => ({...prevState, username: data.email}))
    }).then(api.login_service.authenticate({username: data.email, password: data.password})
        .then(data => {
          localStorage.setItem("token", data.token)
          return setState(prevState => ({...prevState, token: data.token}));
        })
    )
  }

  const logout = () => {
    localStorage.clear();
    setState(prevState => ({...prevState, username: "", token: ""}));
  }

  return (
    <>
      <Router>
        <Navbar logout={logout} state={state} />
        <Switch>
          <Route exact path="/" render={(props) => <Index {...props} state={state} />}/>
          <Route exact path="/dashboard" render={(props) => <Dashboard {...props} state={state} />} />
          <Route exact path="/login" render={(props) => <Login {...props} state={state} login={login} />} />
          <Route exact path="/employee/all" render={(props) => <EmployeeAll {...props} state={state} /> } />
          <Route exact path="/employee/:id/edit" render={(props) => <EmployeeEdit {...props} state={state} />} />
          <Route exact path="/employee/:id/view" render={(props) => <EmployeeView {...props} state={state} /> } />
          <Route exact path="/employee/create" render={(props) => <EmployeeCreate {...props} state={state} /> } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
