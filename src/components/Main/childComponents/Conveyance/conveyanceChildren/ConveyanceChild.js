import React, { Component } from "react"

import Land from "./Land/Land"
import Grantors from "./Grantors/Grantors"
import Grantees from "./Grantees/Grantees"

import { Button } from "antd"

// import { reducer as formReducer } from "redux-form"

class ConveyanceChild extends Component {
  render() {
    const { listId } = this.props
    return (
      <div style={{marginLeft: "1vw"}}>
        <div className="conveyanceHead">
          <p style={{ display: "inline" }}>Conveyance #</p>
          <Button>Delete</Button>
        </div>

        <div className="conveyanceXListFlex">
          <Grantors listId={listId} />
          <Land />
          <Grantees listId={listId} />
        </div>
      </div>
    )
  }
}
export default ConveyanceChild
