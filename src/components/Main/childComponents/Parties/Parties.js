import React, { Component } from "react"

import { findDOMNode } from "react-dom"
import { DragSource, DropTarget } from "react-dnd"

import Party from "./Party"

import { connect } from "react-redux"
import flow from "lodash/flow"

class Parties extends Component {
  render(props) {
    const {
      card,
      isDragging,
      connectDragSource,
      connectDropTarget
    } = this.props
    const opacity = isDragging ? 0 : 1

    const parties = [
      {
        display_name: "Evans, Thomas"
      },
      {
        display_name: "Hammond, Nathan"
      },
      {
        display_name: "Hamlin, Zach"
      },
      {
        display_name: "Foster, Chris"
      }
    ]

    let partyStyle = {
      borderStyle: "dotted",
      width: "20vw",
      padding: "2vh",
      fontWeight: "bold"
    }

    const partyList = parties.map((person, ind) =>
      connectDropTarget(
        <p style={{ ...partyStyle }} key={ind}>
          {person.display_name}
        </p>
      )
    )
    return connectDragSource(
      <div style={{ width: "20vw", textAlign: "center" }}>
        <p>Parties</p>
        {parties.map((person, ind) => (
          <Party party={person.display_name} key={ind} />
        ))}
      </div>
    )
  }
}

const cardSource = {
  beginDrag(props) {
    return {
      index: props.index,
      listId: props.listId,
      card: props.card
    }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult && dropResult.listId !== item.listId) {
      props.removeCard(item.index)
    }
  }
}

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index
    const sourceListId = monitor.getItem().listId

    if (dragIndex === hoverIndex) {
      return
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }
    // Does the moving
    if (props.listId === sourceListId) {
      props.moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().index = hoverIndex
    }
  }
}

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  {}
)(
  flow(
    DropTarget("CARD", cardTarget, connect => ({
      connectDropTarget: connect.dropTarget()
    })),
    DragSource("CARD", cardSource, (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }))
  )(Parties)
)
