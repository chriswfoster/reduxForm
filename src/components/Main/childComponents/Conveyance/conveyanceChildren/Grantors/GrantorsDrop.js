import React, { Component } from "react"
import update from "immutability-helper"

import flow from "lodash/flow"

import { connect } from "react-redux"
import { DropTarget, DragSource } from "react-dnd"

// const Types = {
//   ITEM: "party"
// }
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class GrantorsDrop extends Component {

  render() {

    const {connectDropTarget, connectDragSource } = this.props
 

    return connectDragSource(
      connectDropTarget(
        <div style={{ width: "20vw", height: "10vh", borderStyle: "dotted" }}>
          <p>Drop Grantees Here </p>
        </div>
      )
    )
  }
}


const cardTarget = {
  drop(props, monitor, component) {
    console.log(props)
    const { id } = props
    const sourceObj = monitor.getItem()
    console.log(sourceObj, "is sourceObj")
    if (id !== sourceObj.listId) component.pushCard(sourceObj.card)
    return {
      listId: props.listId,
      addType: "grantors"
    }
  }
}

const cardSource = {
  beginDrag(props) {
    return {
      index: props.index,
      listId: props.listId,
      card: props.card
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
)(
  flow(
    DropTarget("party", cardTarget, connect => ({
      connectDropTarget: connect.dropTarget(),
      test: "hi"
    })),
    DragSource("party", cardSource, (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
      stuff: "hi"
    }))
  )(GrantorsDrop)
)
