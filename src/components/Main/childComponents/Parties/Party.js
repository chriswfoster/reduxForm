import React, { Component } from "react"

import { DragSource } from "react-dnd"
import { connect } from "react-redux"
import { updateRedux } from "../../../../ducks/reducer"

const Types = {
  ITEM: "party"
}
const itemSource = {
  beginDrag(props) {
    const item = { src: props.party, id: props.id }
    return item
  },
  endDrag(props, monitor) {
    let item = monitor.getDropResult() 
    let placeholder = props.reducer.conveyances
    // I know you're looking at my horrible if/else below, don't judge!
    if (item&& monitor.getDropResult && item.spouse){
      placeholder[item.listId][item.addType][item.partyId][item.spouse] = props.party
    }else if(item !== null && item.addType){
      placeholder[item.listId][item.addType].push({ name: props.party })
    }
  
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
