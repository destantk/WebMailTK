import React, {PropTypes} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Anasayfa from "./main/SwitchMenu";
import Contacts from "./pages/contact";
import MailPages from "./pages/mail";

function App() {
    return (
        <Router>
            <div className="wrapper">
                <section className="content">
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                    <Route path="/mail" component={Mail}/>
                </section>
            </div>
        </Router>
    );
}

function Topics() {
    return <MailPages></MailPages>;
}

function Home() {
    return <Anasayfa></Anasayfa>;
}

function About() {
    return <Contacts></Contacts>;
}

function MailListele({match}) {
    return <h3>Seçili Klasör {match.params.id}</h3>;
}

function Mail({match}) {
    return (
        <div>
            <div className="small-box bg-orange">
                <Link to={`${match.url}/INBOX`} className="small-box-footer">
                    INBOX <i className="fa fa-arrow-circle-right"></i>
                </Link>
            </div>
            <div className="col-lg-3 col-xs-3">

            </div>
            <div className="small-box bg-orange">
                <Link to={`${match.url}/Sent`} className="small-box-footer">
                    Sent <i className="fa fa-arrow-circle-right"></i>
                </Link>
            </div>
            <Route path={`${match.path}/:id`} component={MailListele}/>
            <Route
                exact
                path={match.path}
                render={() => <h3>Klasör Seçiniz</h3>}
            />
        </div>
    );
}

function Header() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-xs-3">
                    <div className="small-box bg-aqua">
                        <Link to="/" className="small-box-footer">
                            <i className="fa fa-arrow-circle-right"></i> Dashboard
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-xs-3">
                    <div className="small-box bg-aqua">
                        <Link to="/mail" className="small-box-footer">
                            <i className="fa fa-envelope"></i> Mail
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-xs-3">
                    <div className="small-box bg-green">
                        <Link to="/about" className="small-box-footer">
                            Aboutt <i className="fa fa-arrow-circle-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-xs-3">
                    <div className="small-box bg-red">
                        <Link to="/topics" className="small-box-footer">
                            <i className="fa fa-arrow-circle-right"></i> Topics
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;