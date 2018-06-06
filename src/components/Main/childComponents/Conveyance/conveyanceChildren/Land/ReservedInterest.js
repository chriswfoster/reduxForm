import React, { Component } from "react"
import { connect } from "react-redux"
import { Select, Input, Button, Checkbox, Card, Icon } from "antd"
const Option = Select.Option

class ReservedInterest extends Component {
  constructor() {
    super()
    this.state = {
      reservedCheck: false
    }
  }

  render() {
    const { ind, listId, landInd } = this.props
    return (
      <div className="interestsAdded">
      <div>
        <Select
          placeholder="Interest Types"
          value={
            this.props.reducer.conveyances[listId].lands[landInd]
              .reserved_interests[ind].interest_types || null
          }
          style={{ width: "80%" }}
          onChange={val =>
            this.props.updateInterest(
              "reserved_interests",
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
        checked={
            this.props.reducer.conveyances[listId].lands[landInd]
              .reserved_interests[ind].undivided || false
          }
          onChange={e =>
            this.props.updateInterest(
              "reserved_interests",
              ind,
              "undivided",
              e.target.checked
            )
          }
        >
          Undivided
        </Checkbox>

        <Input
        value={
            this.props.reducer.conveyances[listId].lands[landInd]
              .reserved_interests[ind].amount || null
          }
          style={{ width: "10vw" }}
          placeholder="Amount"
          disabled={
            this.props.reducer.conveyances[listId].lands[landInd]
              .reserved_interests[ind].all_interests
          }
          onChange={e =>
            this.props.updateInterest(
              "reserved_interests",
              ind,
              "amount",
              e.target.value
            )
          }
        />

        <Checkbox
         checked={
            this.props.reducer.conveyances[listId].lands[landInd]
              .reserved_interests[ind].all_interests || false
          }
          onChange={e =>
            this.props.updateInterest(
              "reserved_interests",
              ind,
              "all_interests",
              e.target.checked
            ) && this.setState({ conveyedCheck: e.target.checked })
          }
        >
          All
        </Checkbox>
        </div>
        <Icon type="close" style={{color: "red"}} onClick={()=> this.props.deleteInterest("reserved_interests", ind)}/>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(ReservedInterest)
