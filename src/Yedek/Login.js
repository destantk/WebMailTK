import React from "react";
import Ajax from "../api/Ajax"

class Contact extends React.Component {
    onSubmit() {
        this.props.history.push("/");
    };

    render() {
        return (
            <form>
                <input placeholder="name" type="name"/>
                <input placeholder="name" type="email"/>
                <button onClick={this.onSubmit}>Login</button>
                <Ajax/>
            </form>
        );
    }
}

export default Contact;
