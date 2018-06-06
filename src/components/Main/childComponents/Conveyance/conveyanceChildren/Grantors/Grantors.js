import React, { Component } from "react"
import { connect } from "react-redux"
import GrantorsDrop from "./GrantorsDrop"
import { DropTarget } from "react-dnd"
import GrantorsForm from "./GrantorsForm"

import { Card, Icon } from "antd"

const Types = {
  ITEM: "party"
}
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}
class Grantors extends Component {
  render(props) {
    const { connectDropTarget, listId } = this.props
    const { grantors } = this.props.reducer.conveyances[listId]
    return connectDropTarget(
      <div className="grantsOuterDiv">
        <p className="listTitles">Grantors </p>
        {this.props.reducer.conveyances[listId].grantors.length > 0 ? (
          <Icon
            type="check"
            style={{ display: "inline", color: "green", fontSize: "3vh" }}
          />
        ) : null}
        {grantors.map(
          (party, ind) =>
              <GrantorsForm key={ind} party={party} listId={listId} ind={ind} />
        )}
        <GrantorsDrop listId={listId} />
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(DropTarget(Types.ITEM, {}, collect)(Grantors))
