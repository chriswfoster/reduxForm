import React, { Component } from "react"

import { Field, reduxForm } from "redux-form"

import { Select, Input, Button } from "antd"
const Option = Select.Option

let LandForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <p>Conveyed Interests</p>
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
      <Input style={{width: "5vw"}} placeholder="Amount"/>
      <Button>Add Conveyed Interest</Button>
      <p>Reserved Interests</p>
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
      <Input placeholder="Amount" />
      <Button> Add Reserved INterest </Button>
    </form>
  )
}

LandForm = reduxForm({
  form: "land"
})(LandForm)

export default LandForm
