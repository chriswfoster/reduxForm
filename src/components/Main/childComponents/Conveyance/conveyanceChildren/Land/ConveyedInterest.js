import React, { Component } from "react"
import { connect } from "react-redux"
import { Select, Input, Button, Checkbox, Card, Icon } from "antd"
const Option = Select.Option

class ConveyedInterest extends Component {
  constructor() {
    super()

  }
  render() {
    const { ind, listId, landInd } = this.props
 console.log(this.props)
    return (
      <div className="interestsAdded">
      <div>
        <Select
          value={
            this.props.reducer.conveyances[listId].lands[landInd]
              .conveyed_interests[ind].interest_types || null
          }
          placeholder="Interest Types"
          style={{ width: "80%" }}
          onChange={val =>
            this.props.updateInterest(
              "conveyed_interests",
              ind,
              "interest_types",
              val
            )
          }
          mode="multiple"
        >
          <Option value="all">All</Option>
          <Option value="minerals">Minerals</Option>
          <Option value="surface">Surface</Option>
          <Option value="royalty">Royalty</Option>
        </Select>

        <Checkbox
          onChange={e =>
            this.props.updateInterest(
              "conveyed_interests",
              ind,
              "undivided",
              e.target.checked
            )
          }
          checked={
            this.props.reducer.conveyances[listId].lands[landInd]
              .conveyed_interests[ind].undivided || false
          }
        >
          Undivided
        </Checkbox>

        <Input
          style={{ width: "10vw" }}
          placeholder="Amount"
          value={
            this.props.reducer.conveyances[listId].lands[landInd]
              .conveyed_interests[ind].amount || null
          }
          disabled={
            this.props.reducer.conveyances[listId].lands[landInd]
              .conveyed_interests[ind].all_interests
          }
          onChange={e =>
            this.props.updateInterest(
              "conveyed_interests",
              ind,
              "amount",
              e.target.value
            )
          }
        />

        <Checkbox
        checked={
            this.props.reducer.conveyances[listId].lands[landInd]
              .conveyed_interests[ind].all_interests || false
          }
          onChange={e =>
            this.props.updateInterest(
              "conveyed_interests",
              ind,
              "all_interests",
              e.target.checked
            ) 
          }
        >
          All
        </Checkbox>
        </div>
        <Icon type="close" style={{color: "red"}} onClick={()=> this.props.deleteInterest("conveyed_interests", ind)}/>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(ConveyedInterest)
