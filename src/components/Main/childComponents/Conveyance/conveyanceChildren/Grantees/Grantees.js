import React, { Component } from "react"

import { connect } from "react-redux"
import { updateRedux } from "../../../../../../ducks/reducer"
import { DropTarget } from "react-dnd"
import GranteesDrop from "./GranteesDrop"

import { Card, Icon } from "antd"

const Types = {
  ITEM: "party"
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class Grantees extends Component {
 deleteHandler = (ind, listId) => {
    let placeholder = this.props.reducer.conveyances
    placeholder[listId].grantees.splice(ind, 1)
    this.props.updateRedux(placeholder)
 }
    render() {
    const { listId } = this.props
    return (
      <div className="grantsOuterDiv">
        <p className="listTitles">Grantees</p>
        {this.props.reducer.conveyances[listId].grantees.map((party, ind) => (
          <Card key={ind} className="grantorsFormCard">
            <div className="grantorsFlex"><p>{party.name}</p><Icon type="close" style={{color: "red"}}onClick={()=> this.deleteHandler(ind, listId)}/></div>
          </Card>
        ))}
        <GranteesDrop className="grantorsFormCard" listId={this.props.listId} />
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {updateRedux}
)(DropTarget(Types.ITEM, {}, collect)(Grantees))
