import React, {Component} from "react";
import {BrowserRouter as Router, Link, Redirect, Route, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";

function AuthExample() {
    return (
        <Router>
            <div>
                <AuthButton/>
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/protected" component={Protected}/>
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const AuthButton = withRouter(
    ({history}) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}>Sign out
                </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
);

function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
}

function Public() {
    return <h3>Public</h3>;
}

function Protected() {
    return <h3>Protected</h3>;
}


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
    }

    render() {
        let {from} = this.props.location.state || {from: {pathname: "/"}};
        let {redirectToReferrer} = this.state;
        if (redirectToReferrer) return <Redirect to={from}/>;
        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <Button variant="primary" onClick={this.login}>Primary</Button>
            </div>
        );
    }

    login() {
        fakeAuth.authenticate(() => {
            this.setState({redirectToReferrer: true});
        });
    };
}

export default AuthExample;
