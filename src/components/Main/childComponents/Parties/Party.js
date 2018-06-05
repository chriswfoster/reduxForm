import React, { Component } from "react"

import { DragSource } from "react-dnd"
import { connect } from "react-redux"
import { handleDrop } from "../../../../ducks/reducer"

const Types = {
  ITEM: "party"
}
const itemSource = {
  beginDrag(props) {
    console.log("beginDrag")
    const item = { src: props.party, id: props.id }
    return item
  },
  endDrag(props, monitor) {
    const item = monitor.getDropResult()
    let placeholder = props.form.conveyances
    placeholder[item.listId][item.addType].push({ name: props.party })
    return props.handleDrop(placeholder)
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
    const { isDragging, connectDragSource } = this.props
    console.log(this.props)
    let partyStyle = {
      borderStyle: "dotted",
      width: "20vw",
      padding: "2vh",
      fontWeight: "bold",
      marginBottom: "1vh"
    }

    const opacity = isDragging ? .5 : 1
    return connectDragSource(
      <p style={{ ...partyStyle, opacity }}> {this.props.party} </p>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { handleDrop }
)(DragSource(Types.ITEM, itemSource, collect)(Party))
