import React, { Component } from "react"

import { Field, reduxForm } from "redux-form"

import ConveyedInterest from "./ConveyedInterest"
import ReservedInterest from "./ReservedInterest"
import { updateRedux } from "../../../../../../ducks/reducer"
import { connect } from "react-redux"

import { Select, Input, Button, Checkbox, Card } from "antd"
const Option = Select.Option

class LandForm extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  updateInterest = (type, ind, property, value) => {
    const { listId, landInd } = this.props
    let placeholder = this.props.reducer.conveyances
    placeholder[listId].lands[landInd][type][ind][property] = value
    this.props.updateRedux(placeholder)
  }

  deleteInterest = (type, ind) => {
    const { listId, landInd } = this.props
    let placeholder = this.props.reducer.conveyances
    placeholder[listId].lands[landInd][type].splice(ind, 1)
    this.props.updateRedux(placeholder)
  }

  saveCheck = () => {
    let check = false;
  }

  render(props) {
    const { handleSubmit, addInterest, landInd, land, listId } = this.props

    return (
      <div>
          <div>
            <p className="interestTitles">Conveyed Interests</p>

            {land.conveyed_interests.map((int, ind) => (
              <ConveyedInterest
                updateInterest={this.updateInterest}
                deleteInterest={this.deleteInterest}
                key={ind}
                listId={listId}
                landInd={landInd}
                ind={ind}
              />
            ))}
            <Button
              onClick={() =>
                this.props.addInterest("conveyed_interests", landInd)
              }
            >
              Add Conveyed Interest
            </Button>
          </div>

          <div style={{ marginTop: "2vh" }}>
            <p className="interestTitles">Reserved Interests</p>
            {land.reserved_interests.map((int, ind) => (
              <ReservedInterest
                updateInterest={this.updateInterest}
                deleteInterest={this.deleteInterest}
                key={ind}
                listId={listId}
                landInd={landInd}
                ind={ind}
              />
            ))}
            <Button onClick={() => addInterest("reserved_interests", landInd)}>
              Add Reserved Interest
            </Button>
          </div>
     

        <Button type="primary">Save</Button>
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateRedux }
)(LandForm)
