import React, { Component } from "react"
import update from "immutability-helper"

import connect from "react-redux"

import { DropTarget } from "react-dnd"

class Grantors extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }
  pushCard(card) {
    this.setState(
      update(this.state, {
        cards: {
          $push: [card]
        }
      })
    )
  }

  removeCard(index) {
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[index, 1]]
        }
      })
    )
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    )
  }

  render() {
    const { cards } = this.state
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver
    return (
      <div style={{ width: "25vw" }}>
        teeeeeessst
        {connectDropTarget(
          <div style={{ width: "20vw", height: "10vh", borderStyle: "dotted" }}>
            <p>Drop Grantees Here </p>
          </div>
        )}
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
