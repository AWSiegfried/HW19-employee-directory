import React, { Component } from "react";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
        result: {},
    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.search()
        .then(res => {
            this.setState({ result: res.data})
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            
        )
    }
}