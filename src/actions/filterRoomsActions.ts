export const GET_FILTERED_ROOMS_REQUEST = '@@roomsFilter/GET_FILTERED_ROOMS_REQUEST';
export const GET_FILTERED_ROOMS_SUCCESS = '@@roomsFilter/GET_FILTERED_ROOMS_SUCCESS';
export const GET_FILTERED_ROOMS_FAILURE = '@@roomsFilter/GET_FILTERED_ROOMS_FAILURE';

//Filtered actions type
type getFilteredRoomsRequestActionType = {
  type: typeof GET_FILTERED_ROOMS_REQUEST,
}

type getFilteredRoomsSuccessActionType = {
  type: typeof GET_FILTERED_ROOMS_SUCCESS,
  payload: any
}

type getFilteredRoomsFAILUREActionType = {
  type: typeof GET_FILTERED_ROOMS_FAILURE,
  payload: any
}

export type filteredRoomsActionType =
  getFilteredRoomsRequestActionType
  | getFilteredRoomsSuccessActionType
  | getFilteredRoomsFAILUREActionType;

/**
* get filtered actions
*/
export const getFilteredRoomsSuccessAction = (dateArrival, dateDeparture, totalNumberOfGuests) => <getFilteredRoomsSuccessActionType>({
  type: GET_FILTERED_ROOMS_SUCCESS,
  payload: {
    dateArrival,
    dateDeparture,
    totalNumberOfGuests,
  }
});






