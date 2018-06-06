import React, { Component } from "react"

import { connect } from "react-redux"
import { updateRedux } from "../../../../../../ducks/reducer"
import GrantorSpouse from './GrantorSpouse'

import { Select, Collapse, Icon } from "antd"
const Panel = Collapse.Panel
const Option = Select.Option

class GrantorsForm extends Component {
  constructor() {
    super()
    this.state = {
      collapse: "1"
    }
  }
  deleteHandler = (ind, listId) => {
    let placeholder = this.props.reducer.conveyances
    placeholder[listId].grantors.splice(ind, 1)
    this.props.updateRedux(placeholder)
  }

  selectHandler(ind, listId, val) {
    let placeholder = this.props.reducer.conveyances
    placeholder[listId].grantors[ind].legal_capacity = val
    this.props.updateRedux(placeholder)
    this.setState({ collapse: "0" })
  }

  flipper = () => {
    return this.state.collapse === "1" ? this.setState({collapse:"0"}) : this.setState({collapse: "1"})
  }

  render() {
    console.log(this.state)
    const { party, ind, listId } = this.props
 
    return (
      <Collapse
        activeKey={[this.state.collapse]}
        onChange={() => this.flipper() }
        // className="grantorsFormCard"
      >
        <Panel header={party.name} key="1">
          <p>Legal Capacity:</p>
          <div className="grantorsFlex">
          <Select
            defaultValue="Select"
            onChange={e => this.selectHandler(ind, listId, e)}
          >
            <Option value="Individual">Individual</Option>
            <Option value="Something">Something</Option>
            <Option value="Else">Else</Option>
            <Option value="Goes">Goes</Option>
            <Option value="Here">Here</Option>
          </Select>
          <Icon type="close" style={{color: "red"}}onClick={()=> this.deleteHandler(ind, listId)}/>
          </div>
          {party.spouse_name ? <p>Spouse: {party.spouse_name}</p> : <GrantorSpouse party={party} listId={listId} ind={ind}/>}
        </Panel>
      </Collapse>
    )
  }
}
const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  { updateRedux }
)(GrantorsForm)
