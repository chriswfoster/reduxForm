const ADD_CONVEYANCE = "ADD_CONVEYANCE"
const ADD_LAND = "ADD_LAND"

const initialState = {
  conveyances: [
    {
      grantors: [
        {
          id: "00000-00000-0000", //UUID of the party that was dropped in
          legal_capacity: "Individual", //String value of the drop down.
          spouse_id: "00000-00000-0000" // UUID of the party dropped in spouse field.
          //You can omit if no spouse exists
        }
      ],
      grantees: [
        {
          id: "00000-00000-0000", //UUID of the party that was dropped in
          legal_capacity: "Individual", //String value of the drop down.
          spouse_id: "00000-00000-0000" // UUID of the party dropped in spouse field.
          //You can omit if no spouse exists
        }
      ],
      lands: [
        {
          section_id: "00000-00000-0000", // UUID of the section
          conveyed_interests: [
            {
              amount: "1/2", // String value
              interest_types: ["surface", "mineral"], // Array of string values
              undivided: true,
              all_interest: false
            }
          ],
          reserved_interests: [
            {
              amount: "1/2", // String value
              interest_types: ["surface", "mineral"], // Array of string values
              undivided: true,
              all_interest: false
            }
          ]
        }
      ]
    }
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONVEYANCE:
      return Object.assign({}, state, { conveyances: action.payload })

    default:
      return state
  }
}

export function addConveyance() {
  return {
    type: ADD_CONVEYANCE,
    payload: { grantors: [], grantees: [], lands: [] }
  }
}
export function addLand() {
  return {
    type: ADD_LAND,
    payload: "something"
  }
}
