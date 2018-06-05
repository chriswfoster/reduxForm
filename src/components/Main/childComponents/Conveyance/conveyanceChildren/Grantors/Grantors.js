import React, { Component } from "react"
import update from "immutability-helper"

import connect from "react-redux"
import GrantorsDrop from './GrantorsDrop'

import { DropTarget } from "react-dnd"

class Grantors extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  render() {
    const { cards } = this.state
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver
    return (
      <div style={{ width: "25vw" }}>
        {this.state.cards.map((party) => <p>{party}</p>)}
        <GrantorsDrop />
      </div>
    )
  }
}



//   const mapStateToProps = state => state

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Grantors)
