import React, { Component } from "react"

import { connect } from "react-redux"
import { DropTarget } from "react-dnd"
import GranteesDrop from "./GranteesDrop"

import { Card } from "antd"

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
    const { listId } = this.props
    return (
      <div
        style={{
          width: "20vw",
          height: "88vh",
          borderRight: "solid",
          paddingTop: "2vh",
          textAlign: "center",
          fontWeight: "bolt",
          fontSize: "1.5em"
        }}
      >
        <p>Grantees</p>
        {this.props.reducer.conveyances[listId].grantees.map((party, ind) => (
          <Card key={ind} className="grantorsFormCard">
            {party.name}
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
  {}
)(DropTarget(Types.ITEM, {}, collect)(Grantees))
