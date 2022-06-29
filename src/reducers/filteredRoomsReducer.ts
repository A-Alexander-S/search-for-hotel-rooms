import {
  filteredRoomsActionType,
  GET_FILTERED_ROOMS_SUCCESS
} from "../actions/filterRoomsActions";

const initialStore = {
  dateArrival: null,
  dateDeparture: null,
  totalNumberOfGuests: 0
}

export default function filteredRoomsReducer(store = initialStore, action: filteredRoomsActionType) {
  switch (action.type) {
    case GET_FILTERED_ROOMS_SUCCESS: {
      return {
        ...store,
        dateArrival: action.payload.dateArrival,
        dateDeparture: action.payload.dateDeparture,
        totalNumberOfGuests: action.payload.totalNumberOfGuests
      }
    }
    default:
      return store;
  }
}