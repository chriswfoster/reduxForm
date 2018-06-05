import React, {Component} from 'react';

class GrantorsDrop extends Component {


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
return connectDropTarget(
    <div style={{ width: "20vw", height: "10vh", borderStyle: "dotted" }}>
      <p>Drop Grantees Here </p>
    </div>
  )}
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

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }))(GrantorsDrop)
  
