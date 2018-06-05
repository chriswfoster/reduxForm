import React, { Component } from "react"

import { findDOMNode } from "react-dom"
import { DragSource, DropTarget } from "react-dnd"
import { connect } from "react-redux"
import flow from "lodash/flow"

const Types = {
  ITEM: "party"
}
const itemSource = {
  beginDrag(props) {
    console.log("beginDrag")
    const item = { src: props.src, id: props.id }
    return item
  },
  endDrag(props) {
    console.log(props)
    
    return props.handleDrop(props.party)
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Party extends Component {

  render(props) {
    console.log(this.props)
    const { isDragging, connectDragSource, src } = this.props

    let partyStyle = {
      borderStyle: "dotted",
      width: "20vw",
      padding: "2vh",
      fontWeight: "bold",
      marginBottom: "1vh"
    }

    const opacity = isDragging ? 0 : 1
    return connectDragSource(<p style={{...partyStyle, opacity}}> {this.props.party} </p>)
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(DragSource(Types.ITEM, itemSource, collect)(Party))