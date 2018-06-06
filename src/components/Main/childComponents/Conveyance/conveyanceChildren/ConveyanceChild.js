import React, { Component } from "react"

import Land from "./Land/Land"
import Grantors from "./Grantors/Grantors"
import Grantees from "./Grantees/Grantees"
import {updateRedux} from '../../../../../ducks/reducer'
import { Button } from "antd"
import {connect} from 'react-redux'

class ConveyanceChild extends Component {

  removeConveyance = (ind) => {
    let placeholder= this.props.reducer.conveyances
    placeholder.splice(ind, 1)
    this.props.updateRedux(placeholder)
  }

  render() {
    const { listId } = this.props
    return (
      <div style={{ marginLeft: "1vw", marginBottom: "2vh" }}>
        <div className="conveyanceHead">
          <p style={{ display: "inline" }}>Conveyance {listId + 1}</p>
          <Button onClick={()=> this.removeConveyance(listId)}>Delete Conveyance {listId + 1}</Button>
        </div>

        <div className="conveyanceXListFlex">
          <Grantors listId={listId} />
          <Land listId={listId} />
          <Grantees listId={listId} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {updateRedux})(ConveyanceChild)
