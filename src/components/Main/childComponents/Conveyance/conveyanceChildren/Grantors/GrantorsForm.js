import React, {Component} from 'react';

import {connect} from 'react-redux'
import {updateRedux} from '../../../../../../ducks/reducer'

import { Select, Input, Button, Card } from "antd"
const Option = Select.Option


class GrantorsForm extends Component {
    
    deleteHandler = (ind, listId) => {
        let placeholder = this.props.reducer.conveyances
        placeholder[listId].grantors.splice(ind, 1)
        this.props.updateRedux(placeholder)
      }

      selectHandler(ind, listId, val){
        let placeholder = this.props.reducer.conveyances
        placeholder[listId].grantors[ind].legal_capacity=val
        this.props.updateRedux(placeholder)
      }


render() {
    const {party, ind, listId} = this.props
return(
<Card className="grantorsFormCard" title={party.name} extra={<p onClick={()=> this.deleteHandler(ind,listId)}>X</p>}>
<p>Legal Capacity:</p>
<Select
  defaultValue="Select"
  onChange={(e) => this.selectHandler(ind,listId, e)}
>
  <Option value="Individual">Individual</Option>
  <Option value="Something">Something</Option>
  <Option value="Else">Else</Option>
  <Option value="Goes">Goes</Option>
  <Option value="Here">Here</Option>
</Select>
</Card>
)}
}
const mapStateToProps = state => state

export default connect(mapStateToProps, {updateRedux})(GrantorsForm)