import React, { Component } from "react"

import { DragSource } from "react-dnd"
import { connect } from "react-redux"
import { updateRedux } from "../../../../ducks/reducer"

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
    let item = monitor.getDropResult() 
    let placeholder = props.form.conveyances

    monitor.getDropResult() ? (
          placeholder[item.listId][item.addType].push({ name: props.party }))
      : null
    props.updateRedux(placeholder)
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
      width: "15vw",
      padding: "2vh",
      fontWeight: "bold",
      marginBottom: "1vh",
      marginLeft: "2.5vw"
    }

    const opacity = isDragging ? 0.5 : 1
    return connectDragSource(
      <p style={{ ...partyStyle, opacity }}> {this.props.party} </p>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateRedux }
)(DragSource(Types.ITEM, itemSource, collect)(Party))
