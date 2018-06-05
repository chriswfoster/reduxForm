import React, { Component } from "react"
import update from "immutability-helper"

import { connect } from "react-redux"
import { DropTarget } from "react-dnd"

const Types = {
  ITEM: "party"
}
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class GranteesDrop extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  pushCard(card) {
    console.log("pushCard")
    this.setState(
      update(this.state, {
        cards: {
          $push: [card]
        }
      })
    )
  }

  removeCard(index) {
    console.log("removeCard")
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[index, 1]]
        }
      })
    )
  }

  moveCard(dragIndex, hoverIndex) {
    console.log("moveCard")
    const { cards } = this.state
    const dragCard = cards[dragIndex]
    console.log("moveCard")
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

    return connectDropTarget(
      <div style={{ width: "20vw", height: "10vh", borderStyle: "dotted" }}>
        <p>Drop Grantees Here </p>
      </div>
    )
  }
}

//I need to fix this below to get the drop working. id is undefined and it compares it to listId
const cardTarget = {
  drop(props, monitor, component) {
    console.log(component)
    const { id } = props
    const sourceObj = monitor.getItem()
    console.log(sourceObj, "is sourceObj")
    if (id !== sourceObj.listId) component.pushCard(sourceObj.card)
    return {
      listId: id
    }
  }
}

const mapStateToProps = state => state

// export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver(),
//     canDrop: monitor.canDrop()
//   }))(GrantorsDrop)
export default connect(
  mapStateToProps,
  {}
)(DropTarget(Types.ITEM, cardTarget, collect)(GranteesDrop))
