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
    const { connectDropTarget } = this.props
    console.log(this.props)
    return connectDropTarget(
      <div style={{ width: "20vw", height: "20vh", }}>
        {this.state.cards.map(party => <p>{party}</p>)}
        <GrantorsDrop />
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(DropTarget(Types.ITEM, {}, collect)(Grantors))
