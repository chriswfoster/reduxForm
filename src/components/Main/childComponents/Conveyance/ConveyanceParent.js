import React, { Component } from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"

import ConveyanceChild from './conveyanceChildren/ConveyanceChild'

import { Button } from "antd"

import "./conveyance.css"
class ConveyanceParent extends Component {
  handler = () => {
    console.log("hi")
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Button className="addConveyance" onClick={this.handler} size={"large"}>
          Add Conveyance
        </Button>
        {this.props.form.conveyances.map(conveyance => <ConveyanceChild conveyance={conveyance}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(ConveyanceParent)
// export default ConveyanceParent
