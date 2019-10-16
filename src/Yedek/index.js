import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import App from "./main/Menu";
import Users from "./pages/users";
import Contact from "./pages/contact";
import Notfound from "./pages/notfound";
import Login from "./main/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./asset/css/AdminLTE.css";
import "./asset/css/skins/_all-skins.min.css";
import SwitchMenu from "./SwitchMenu";

const routing = (
    <Router>
        <div>
            {/*<Breadcrumb>*/}
            {/*<Breadcrumb.Item href="/">Home</Breadcrumb.Item>*/}
            {/*<Breadcrumb.Item href="/users">Users</Breadcrumb.Item>*/}
            {/*<Breadcrumb.Item href="/contact">Contact</Breadcrumb.Item>*/}
            {/*<Breadcrumb.Item href="/login">Login</Breadcrumb.Item>*/}
            {/*</Breadcrumb>*/}
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/menu">SwitchMenu</Link>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/users" component={Users}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Route path="/menu" component={SwitchMenu}/>
                <Route component={Notfound}/>
            </Switch>

        </div>

    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))