import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = [{products: []}];
    }

    render() {
        function format(cell, row) {
            return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
        }

        var selectRowProp = {
            mode: "checkbox",
            clickToSelect: true,
            bgColor: "rgb(238, 193, 213)"
        };

        return (<BootstrapTable
                data={this.state.products}
                selectRow={selectRowProp}
                striped
                hover
                condensed
                pagination
                insertRow
                deleteRow
                search
            >
                <TableHeaderColumn dataField="id" isKey dataAlign="right" dataSort>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataSort>Product Title</TableHeaderColumn>
                <TableHeaderColumn dataField="author" dataAlign="center" dataFormat={format}>Product
                    Author</TableHeaderColumn>
            </BootstrapTable>
        );
    }

    componentDidMount() {
        fetch("http://localhost:3000/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({isLoaded: true, products: result});
                },
                (error) => {
                    this.setState({isLoaded: true, error});
                }
            )
    }
}

export default Contact;
