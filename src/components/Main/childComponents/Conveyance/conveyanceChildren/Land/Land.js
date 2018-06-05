import React, { Component } from "react"

import LandForm from "./LandForm"

import { Button } from "antd"

class Land extends Component {
  handleSubmit = a => {
    console.log("a: ", a)
  }

  render() {
    return (
      <div style={{ borderRight: "solid", height: "88vh" }}>
        <LandForm handleSubmit={this.handleSubmit} />
        <Button>Add Land</Button>
      </div>
    )
  }
}
export default Land
