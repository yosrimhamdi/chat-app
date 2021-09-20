import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ReduxToastr from 'react-redux-toastr';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <ReduxToastr
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        timeOut={1000}
      />
    </Router>
  );
}

export default App;
