import React, { Component } from "react"
import { connect } from "react-redux"
import GrantorsDrop from "./GrantorsDrop"
import { DropTarget } from "react-dnd"
import GrantorsForm from './GrantorsForm'

import {  Card } from "antd"

const Types = {
  ITEM: "party"
}
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}
class Grantors extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  render(props) {
    const { connectDropTarget, listId } = this.props
    const { grantors } = this.props.form.conveyances[listId]
    console.log(this.props)
    return connectDropTarget(
      <div style={{ width: "20vw", height: "88vh", borderRight: "solid", paddingTop: "2vh", textAlign: "center", fontWeight: "bolt", fontSize: "1.5em" }}>
  <p>Grantors </p>
        {grantors.map(
          (party, ind) =>
            party.legal_capacity ? (
              <Card className="grantorsFormCard" key={ind}>{party.name}</Card>
              
            ) : (
              <GrantorsForm party={party} listId={listId} ind={ind}/>
            )
        )}
        <GrantorsDrop listId={listId}/>
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(DropTarget(Types.ITEM, {}, collect)(Grantors))
