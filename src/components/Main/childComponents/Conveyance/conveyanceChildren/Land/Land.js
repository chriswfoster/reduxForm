import React, { Component } from "react"

import LandForm from "./LandForm"
import { connect } from "react-redux"
import { updateRedux } from "../../../../../../ducks/reducer"

import { Button, Modal, Card, Input, Icon } from "antd"

class Land extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      modalText: ""
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleOk = e => {
    let placeholder = this.props.reducer.conveyances
    placeholder[this.props.listId].lands.push({
      section_id: this.state.modalText, // UUID of the section
      conveyed_interests: [
        {
          amount: "", // String value
          interest_types: [], // Array of string values
          undivided: true,
          all_interest: false
        }
      ],
      reserved_interests: [
        {
          amount: "", // String value
          interest_types: [], // Array of string values
          undivided: true,
          all_interest: false
        }
      ]
    })
    this.props.updateRedux(placeholder)

    this.setState({
      visible: false,
      modalText: ""
    })
  }
  handleCancel = e => {
    this.setState({
      visible: false,
      modalText: ""
    })
  }
  textHandler = e => {
    e.preventDefault()
    this.setState({
      modalText: e.target.value
    })
  }

  addInterest = (type, index) => {
    console.log(this.props)
    let placeholder = this.props.reducer.conveyances
    placeholder[this.props.listId].lands[index][type].push({
      amount: "", // String value
      interest_types: [], // Array of string values
      undivided: true,
      all_interest: false
    })
    this.props.updateRedux(placeholder)
  }

  handleSubmit = a => {
    console.log("a: ", a)
  }

  removeLand = ind => {
    let placeholder = this.props.reducer.conveyances
    placeholder[this.props.listId].lands.splice(ind, 1)
    this.props.updateRedux(placeholder)
  }

  render() {
    const { listId } = this.props
    const { lands } = this.props.reducer.conveyances[listId]

    return (
      <div className="landOuterDiv">
        <p className="listTitles"> Land </p>

        {this.props.reducer.conveyances[listId].lands.map((land, ind) => (
          <Card
            key={ind}
            className="grantorsFormCard"
            title={`Section ${land.section_id}`}
            extra={
              <Icon
                type="close"
                style={{ color: "red" }}
                onClick={() => this.removeLand(ind)}
              />
            }
          >
            <LandForm
              style={{ width: "100%" }}
              handleSubmit={this.handleSubmit}
              addInterest={this.addInterest}
              land={land}
              key={ind}
              landInd={ind}
              listId={listId}
            />
          </Card>
        ))}
        <Button type="primary" onClick={() => this.showModal()}>
          Add Land
        </Button>
        <Modal
          title="Section ID"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            value={this.state.modalText}
            onChange={e => this.textHandler(e)}
            placeholder="Type Section ID here."
            autoFocus
          />
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateRedux }
)(Land)
