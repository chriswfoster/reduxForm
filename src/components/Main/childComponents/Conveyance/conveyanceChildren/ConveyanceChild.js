import React, { Component } from "react"

import Land from "./Land/Land"
import Grantors from "./Grantors/Grantors"
import Grantees from './Grantees'

import { Button } from "antd"

import { reducer as formReducer } from "redux-form"

class ConveyanceChild extends Component {
  render() {
    return (
      <div>
        <Button>Delete</Button>
        <div className="conveyanceListFlex">
          <Grantors />
          <Land />
          <Grantees />
        </div>
      </div>
    )
  }
}
export default ConveyanceChild

// let exampleJSON = {
//   conveyances: [
//     {
//       grantors: [
//         {
//           id: "00000-00000-0000", //UUID of the party that was dropped in
//           legal_capacity: "Individual", //String value of the drop down.
//           spouse_id: "00000-00000-0000" // UUID of the party dropped in spouse field.
//           //You can omit if no spouse exists
//         }
//       ],
//       grantees: [
//         {
//           id: "00000-00000-0000", //UUID of the party that was dropped in
//           legal_capacity: "Individual", //String value of the drop down.
//           spouse_id: "00000-00000-0000" // UUID of the party dropped in spouse field.
//           //You can omit if no spouse exists
//         }
//       ],
//       lands: [
//         {
//           section_id: "00000-00000-0000", // UUID of the section
//           conveyed_interests: [
//             {
//               amount: "1/2", // String value
//               interest_types: ["surface", "mineral"], // Array of string values
//               undivided: true,
//               all_interest: false
//             }
//           ],
//           reserved_interests: [
//             {
//               amount: "1/2", // String value
//               interest_types: ["surface", "mineral"], // Array of string values
//               undivided: true,
//               all_interest: false
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }
