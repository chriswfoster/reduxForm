import React, { Component } from "react"

import flow from "lodash/flow"

import { connect } from "react-redux"
import { DropTarget, DragSource } from "react-dnd"


class GranteesDrop extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }


  render() {
    const {connectDropTarget } = this.props

    return connectDropTarget(
      <div className="grantorsFormCard" style={{ width: "15vw", height: "10vh", borderStyle: "dotted" }}>
        <p>Drop Grantees Here </p>
      </div>
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
        addType: "grantees"
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
    )(GranteesDrop)
  )
  