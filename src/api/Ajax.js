import React from "react";
import {Alert} from "react-bootstrap";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null, isLoaded: false, items: []};
    }

    componentDidMount() {
        fetch("http://localhost:3000/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({isLoaded: true, items: result});
                },
                (error) => {
                    this.setState({isLoaded: true, error});
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return
            <Alert variant="danger">
                <Alert.Heading>DATA:</Alert.Heading>
                {error.message}
            </Alert>
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Alert variant="success">
                    <Alert.Heading>HHata Var?</Alert.Heading>
                    {JSON.stringify(items)}
                </Alert>
            );
        }
    }
}

export default MyComponent;
