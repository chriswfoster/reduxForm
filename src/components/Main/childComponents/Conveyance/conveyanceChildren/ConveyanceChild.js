import React, { Component } from "react"

import Land from "./Land/Land"
import Grantors from "./Grantors/Grantors"
import Grantees from './Grantees/Grantees'

import { Button } from "antd"

// import { reducer as formReducer } from "redux-form"

class ConveyanceChild extends Component {
  render() {
    return (
      <div>
        <Button>Delete</Button>
        <div className="conveyanceListFlex">
          <Grantors listId={this.props.listId}/>
          <Land />
          <Grantees />
        </div>
      </div>
    )
  }
}
export default ConveyanceChild
