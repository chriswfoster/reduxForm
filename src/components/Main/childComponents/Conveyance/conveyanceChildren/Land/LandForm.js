import React, { Component } from "react"

import { Field, reduxForm } from "redux-form"

import { Select, Input, Button, Checkbox, Card } from "antd"
const Option = Select.Option



let LandForm = props => {
  const { handleSubmit, addInterest, ind, land } = props
  return (
    <div>
      <Card title="Conveyed Interests">
        {/* <p>Conveyed Interests</p> */}
        {land.conveyed_interests.map((int, i) => (
          <form onSubmit={e => handleSubmit(e)} key={i}>
            <Field name="conveyedInterests" type="select" component="Component">
              <Select
                defaultValue="Interest Types"
                style={{ width: 120 }}
                onChange={e => console.log(e)}
              >
                <Option value="all">All</Option>
                <Option value="minerals">Minerals</Option>
                <Option value="surface">Surface</Option>
                <Option value="royalty">Royalty</Option>
              </Select>
            </Field>

            <Field name="conveyedAmount" component="Component">
              <Input style={{ width: "10vw" }} placeholder="Amount" />
            </Field>
            <Field name="conveyedAllBox" component="Component">
              <Checkbox>All</Checkbox>
            </Field>
          </form>
        ))}
        <Button onClick={()=> addInterest("conveyed_interests", ind)}>Add Conveyed Interest</Button>
      </Card>

      <Card title="Reserved Interests" style={{marginTop: "2vh"}}>
        {land.reserved_interests.map((int, i) => (
          <form onSubmit={e => handleSubmit(e)} key={i}>
            <Field name="reservedInterests" type="select" component="Component">
              <Select
                defaultValue="Interest Types"
                style={{ width: 120 }}
                onChange={e => console.log(e)}
              >
                <Option value="all">All</Option>
                <Option value="minerals">Minerals</Option>
                <Option value="surface">Surface</Option>
                <Option value="royalty">Royalty</Option>
              </Select>
            </Field>

            <Field name="reservedAmount" type="text" component="Component">
              <Input style={{ width: "10vw" }} placeholder="Amount" />
            </Field>
            <Field name="reservedAllBox" component="Component">
              <Checkbox>All</Checkbox>
            </Field>
          </form>
        ))}
        <Button onClick={()=> addInterest("reserved_interests", ind)}> Add Reserved Interest </Button>
      </Card>

      <Button type="submit">Save</Button>
    </div>
  )
}

export default reduxForm({
  form: "land"
})(LandForm)
