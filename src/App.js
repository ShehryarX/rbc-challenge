import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Table, Divider, Tag } from "antd";

import data from "./data";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "over_draft"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "credit_usage"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "credit_history"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "purpose"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "housing"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "job"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "num_dependents"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "class"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>sfhsdif</h1>
        <Table dataSource={data} columns={columns} />
      </div>
    );
  }
}

export default App;
