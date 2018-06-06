import React, { Component } from "react"

import flow from "lodash/flow"

import { connect } from "react-redux"

import { DropTarget, DragSource } from "react-dnd"

class GrantorSpouse extends Component {

 

  render() {
    const { connectDropTarget, connectDragSource } = this.props

    return connectDragSource(
      connectDropTarget(
        <div
          className="grantorsFormCard"
          style={{ width: "15vw", height: "10vh", borderStyle: "dotted" }}
        >
          <p>Drop Spouse Here </p>
        </div>
      )
    )
  }
}

const cardTarget = {
  drop(props, monitor, component) {
    const { id } = props
    console.log(id)
    const sourceObj = monitor.getItem()
    if (id !== sourceObj.listId) component.pushCard(sourceObj.card)
    return {
      listId: props.listId,
      addType: "grantors",
      spouse: "spouse_name",
      partyId: props.ind
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
  )(GrantorSpouse)
)
