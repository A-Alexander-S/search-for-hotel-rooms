export const GET_FILTERED_ROOMS_REQUEST = '@@roomsFilter/GET_FILTERED_ROOMS_REQUEST';
export const GET_FILTERED_ROOMS_SUCCESS = '@@roomsFilter/GET_FILTERED_ROOMS_SUCCESS';
export const GET_FILTERED_ROOMS_FAILURE = '@@roomsFilter/GET_FILTERED_ROOMS_FAILURE';

export const CHANGE_DATE_ARRIVAL = '@@roomsFilter/CHANGE_DATE_ARRIVAL';
export const CHANGE_DATE_DEPARTURE = '@@roomsFilter/CHANGE_DATE_DEPARTURE';

export const CHANGE_AMOUNT_GUESTS = '@@roomsFilter/CHANGE_AMOUNT_GUESTS';
export const CLEAR_AMOUNT_GUESTS = '@@roomsFilter/CLEAR_AMOUNT_GUESTS';

//Filtered actions type(init)
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

//Dates stay actions type
export type changeDateArrivalType = {
  type: typeof CHANGE_DATE_ARRIVAL,
  payload: {
    dateArrival: string,
  }
}

export type changeDateDepartureType = {
  type: typeof CHANGE_DATE_DEPARTURE,
  payload: {
    dateDeparture: string,
  }
}

export type clearAmountGuestsType = {
  type: typeof CLEAR_AMOUNT_GUESTS,
  payload: {
    dateDeparture: string,
  }
}

type changeAmountGuestsType = {
  type: typeof CHANGE_AMOUNT_GUESTS,
  payload: {
    quantityAdults: number,
    quantityChildren: number,
    quantityBabies: number
  }
}

export type filteredRoomsActionType =
  getFilteredRoomsRequestActionType
  | getFilteredRoomsSuccessActionType
  | getFilteredRoomsFAILUREActionType
  | changeDateArrivalType
  | changeDateDepartureType
  | changeAmountGuestsType
  | clearAmountGuestsType;

export const changeDateArrivalAction = (dateArrival: string) => <changeDateArrivalType>{
  type: CHANGE_DATE_ARRIVAL,
  payload: {
    dateArrival
  }
}

export const changeDateDepartureAction = (dateDeparture: string) => <changeDateDepartureType>{
  type: CHANGE_DATE_DEPARTURE,
  payload: {
    dateDeparture
  }
}

export const clearAmountGuestsAction = () => <clearAmountGuestsType>{
  type: CLEAR_AMOUNT_GUESTS,
}

export const changeAmountGuestsAction = (
  quantityAdults: number,
  quantityChildren: number,
  quantityBabies: number) => <changeAmountGuestsType>{
    type: CHANGE_AMOUNT_GUESTS,
    payload: {
      quantityAdults,
      quantityChildren,
      quantityBabies
    }
  }





