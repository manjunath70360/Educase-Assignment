import {BrowserRouter, Switch, Route} from "react-router-dom"

import "./App.css";
import Login from "./components/login";
import Home from "./components/home"
import Profile from "./components/profile"

const App = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
    </Switch>
    </BrowserRouter>
)
export default App;
