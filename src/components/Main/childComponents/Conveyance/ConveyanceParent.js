import React, { Component } from "react"
import { connect } from "react-redux"
// import { Field, reduxForm } from "redux-form"

import ConveyanceChild from "./conveyanceChildren/ConveyanceChild"

import {addConveyance} from '../../../../ducks/reducer'

import { Button } from "antd"

import "./conveyance.css"
class ConveyanceParent extends Component {



  render() {
  
    return (
      <div>
        <Button className="addConveyance" onClick={()=> this.props.addConveyance(this.props.reducer.conveyances)} size={"large"}>
          Add Conveyance
        </Button>
        <div className="conveyanceYListFlex">
          {this.props.reducer.conveyances.map((conveyance, ind) => (
            <ConveyanceChild key={ind} listId={ind} conveyance={conveyance} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {addConveyance}
)(ConveyanceParent)
// export default ConveyanceParent
