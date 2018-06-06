import React, { Component } from "react"

import { Field, reduxForm } from "redux-form"

import { Select, Input, Button, Checkbox } from "antd"
const Option = Select.Option

let LandForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <p>Conveyed Interests</p>

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
        <Input style={{ width: "5vw" }} placeholder="Amount" />
      </Field>
      <Field name="conveyedAllBox" component="Component">
        <Checkbox>All</Checkbox>
      </Field>

      <Button>Add Conveyed Interest</Button>

      <p>Reserved Interests</p>
      <Field name="reservedInterests" component="Component">
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

      <Field name="reservedAmount" component="Component">
        <Input placeholder="Amount" />
      </Field>
      <Field name="reservedAllBox" component="Component">
        <Checkbox>All</Checkbox>
      </Field>
      <Button> Add Reserved INterest </Button>
      <Button type="submit">Save</Button>
    </form>
  )
}

export default reduxForm({
  form: "land"
})(LandForm)
