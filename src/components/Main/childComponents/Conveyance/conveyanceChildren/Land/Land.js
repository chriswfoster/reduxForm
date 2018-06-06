import React, { Component } from "react"

import LandForm from "./LandForm"
import {connect} from 'react-redux'
import {updateRedux} from '../../../../../../ducks/reducer'

import { Button, Modal } from "antd"

class Land extends Component {
    constructor(){
        super()
        this.state={
            visible: false,
            modalText: ""
        }
    }

    showModal = () => {
      this.setState({
        visible: true,
      });
    }
    handleOk = (e) => {
        let placeholder = this.props.reducer.conveyances
        placeholder[this.props.listId].lands.push({section_id: this.state.modalText})
        this.props.updateRedux(placeholder)

      this.setState({
        visible: false,
        modalText: ""
      });

    }
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
        modalText: ""
      });
    }
    textHandler = (e) => {
        e.preventDefault()
        this.setState({
            modalText: e.target.value
        })
    }

  handleSubmit = a => {
    console.log("a: ", a)
  }

  render() {
    return (
      <div style={{ borderRight: "solid", height: "88vh" }}>
      <p> Land </p>
        <LandForm handleSubmit={this.handleSubmit} />
        <Button type="primary" onClick={()=> this.showModal()}>Add Land</Button>
        <Modal
          title="Section ID"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <input value={this.state.modalText} onChange={(e)=> this.textHandler(e) } placeholder="Type Section ID here." autoFocus/>
        </Modal>

      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {updateRedux})(Land)
