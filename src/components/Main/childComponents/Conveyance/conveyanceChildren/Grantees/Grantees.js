import React, { Component } from "react"

import { connect } from "react-redux"
import { DropTarget } from "react-dnd"
import GranteesDrop from "./GranteesDrop"

const Types = {
  ITEM: "party"
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class Grantees extends Component {
  render() {
      const {listId} = this.props
    return (
      <div>
        {this.props.form.conveyances[listId].grantees.map(party => (
          <p>{party.name}</p>
        ))}
        <GranteesDrop listId={this.props.listId} />
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(DropTarget(Types.ITEM, {}, collect)(Grantees))
