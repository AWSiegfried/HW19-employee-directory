import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Main from "./Main";
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: "",
    filteredResults: []
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getUsers()
      .then((res) => {
          console.log(res)
        this.setState({ result: res.data.results || [], filteredResults: res.data.results || [] });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const filteredResults = this.state.result.filter(row => `${row.name.first} ${row.name.last}`.toLowerCase().includes(value.toLowerCase()))
    this.setState({filteredResults: filteredResults})    
};


  render() {
    console.log(this.state.search)
    return (
      <Wrapper>
        <Header
          title={"Employee Directory"}
          subtitle={
            "Click on carrots to filter by heading or use the search box to narrow your results."
          }
        />
        <Main >
          <SearchBox handleInputChange={this.handleInputChange} search = {this.state.search}/>
          <DataTable data={this.state.filteredResults}/>
        </Main>
      </Wrapper>
    );
  }
}

export default EmployeeContainer;
