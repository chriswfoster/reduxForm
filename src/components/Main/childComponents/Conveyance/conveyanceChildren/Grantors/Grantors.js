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

const cardTarget = {
  drop(props, monitor, component) {
    const { id } = props
    const sourceObj = monitor.getItem()
    if (id !== sourceObj.listId) component.pushCard(sourceObj.card)
    return {
      listId: id
    }
  }
}

//   const mapStateToProps = state => state

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Grantors)
