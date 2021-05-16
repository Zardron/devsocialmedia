import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
      <Switch>
        <Route path="/register" component={Register} />
      </Switch>
      <Switch>
        <Route path="/profile/:username" component={Profile} />
      </Switch>
    </Router>
  )
}

export default App;
