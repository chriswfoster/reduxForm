const ADD_CONVEYANCE = "ADD_CONVEYANCE"
const HANDLE_DROP = "HANDLE_DROP"

const initialState = {
  conveyances: [
    {
      grantors: [
        {
          name: "Placeholder, Name",
          id: "00000-00000-0000", //UUID of the party that was dropped in
          legal_capacity: "Individual", //String value of the drop down.
          spouse_id: "00000-00000-0000", // UUID of the party dropped in spouse field.
          spouse_name: "Sue, Billy"
          //You can omit if no spouse exists
        }
      ],
      grantees: [
        {
          name: "Placeholder, Name",
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
  ],
  parties: [
    {
      display_name: "Evans, Thomas"
    },
    {
      display_name: "Hammond, Nathan"
    },
    {
      display_name: "Hamlin, Zach"
    },
    {
      display_name: "Foster, Chris"
    },
    {
      display_name: "Jordan, Michael"
    },
    {
      display_name: "Busey, Gary"
    },
    {
      display_name: "Winfrey, Oprah"
    },
    {
      display_name: "Fawcett, Farrah"
    },
    {
      display_name: "Gosling, Ryan"
    },
    {
      display_name: "Cage, Nick"
    },
    {
      display_name: "LaBeouf, Shia"
    },
    {
      display_name: "Witherspoon, Reese"
    },
    {
      display_name: "Culkin, Macaulay"
    },
    {
      display_name: "Reynolds, Ryan"
    }
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONVEYANCE:
      return Object.assign({}, state, { conveyances: action.payload })
    case HANDLE_DROP:
      return Object.assign({}, state, { conveyances: action.payload })

    default:
      return state
  }
}

export function addConveyance(convList) {
  let test = convList
  test.push({
    grantors: [],
    grantees: [],
    lands: []
  })
  return {
    type: ADD_CONVEYANCE,
    payload: test
  }
}

export function updateRedux(newArr) {
  return {
    type: HANDLE_DROP,
    payload: newArr
  }
}

export function removeLand() {}
