import React, { Component } from "react"
import { connect } from "react-redux"
import GrantorsDrop from "./GrantorsDrop"
import { DropTarget } from "react-dnd"
const Types = {
  ITEM: "party"
}
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}
class Grantors extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  render(props) {
    const { connectDropTarget, listId } = this.props
    console.log(this.props)
    return connectDropTarget(
      <div style={{ width: "20vw", height: "20vh" }}>
        {this.props.form.conveyances[listId].grantors.map(party => (
          <p>{party.name}</p>
        ))}
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
