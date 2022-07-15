export const GET_FILTERED_ROOMS_REQUEST = '@@roomsFilter/GET_FILTERED_ROOMS_REQUEST';
export const GET_FILTERED_ROOMS_SUCCESS = '@@roomsFilter/GET_FILTERED_ROOMS_SUCCESS';
export const GET_FILTERED_ROOMS_FAILURE = '@@roomsFilter/GET_FILTERED_ROOMS_FAILURE';

export const CHANGE_DATE_ARRIVAL = '@@roomsFilter/CHANGE_DATE_ARRIVAL';
export const CHANGE_DATE_DEPARTURE = '@@roomsFilter/CHANGE_DATE_DEPARTURE';

export const CHANGE_AMOUNT_GUESTS = '@@roomsFilter/CHANGE_AMOUNT_GUESTS';
export const CLEAR_AMOUNT_GUESTS = '@@roomsFilter/CLEAR_AMOUNT_GUESTS';

export const MIN_PRICE_PER_ROOM = '@@roomsFilter/MIN_PRICE_PER_ROOM';
export const MAX_PRICE_PER_ROOM = '@@roomsFilter/MAX_PRICE_PER_ROOM';

export const ROOM_RULES = '@@roomsFilter/ROOM_RULES';

export const CHANGE_NUMBER_OF_BEDROOMS = '@@roomsFilter/CHANGE_NUMBER_OF_BEDROOMS';
export const CHANGE_NUMBER_OF_BEDS = '@@roomsFilter/CHANGE_NUMBER_OF_BEDS';
export const CHANGE_NUMBER_OF_BATHROOMS = '@@roomsFilter/CHANGE_NUMBER_OF_BATHROOMS';

export const CHOICE_OF_AVAILABILITY = '@@roomsFilter/CHOICE_OF_AVAILABILITY';

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

//Dates stay actions types
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

//Actions types for min max price per rooms
export type changeMinPricePerRoomType = {
  type: typeof MIN_PRICE_PER_ROOM,
  payload: {
    minPricePerRoom: number,
  }
}

export type changeMaxPricePerRoomType = {
  type: typeof MAX_PRICE_PER_ROOM,
  payload: {
    maxPricePerRoom: number,
  }
}

//Actions types for change amount guests
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

//Actions types for rooms with certain rules
export type roomRulesType = {
  type: typeof ROOM_RULES;
  payload: {
    smoke: boolean,
    pets: boolean,
    guests: boolean,
  }
}

//Actions types for a selection of amenities
export type choiceOfAvailabilityType = {
  type: typeof CHOICE_OF_AVAILABILITY;
  payload: {
    wideCorridor: true | undefined,
    assistant: true | undefined
  }
}

//Actions types for changes amount rooms
export type changeNumberOfBedroomsType = {
  type: typeof CHANGE_NUMBER_OF_BEDROOMS;
  payload: {
    numberOfBedrooms: number | undefined
  }
}

export type changeNumberOfBedsType = {
  type: typeof CHANGE_NUMBER_OF_BEDS;
  payload: {
    numberOfBeds: number | undefined
  }
}

export type changeNumberOfBathroomsType = {
  type: typeof CHANGE_NUMBER_OF_BATHROOMS;
  payload: {
    numberOfBathrooms: number | undefined
  }
}

export type filteredRoomsActionType =
  getFilteredRoomsRequestActionType
  | getFilteredRoomsSuccessActionType
  | getFilteredRoomsFAILUREActionType
  | changeDateArrivalType
  | changeDateDepartureType
  | changeAmountGuestsType
  | clearAmountGuestsType
  | changeMinPricePerRoomType
  | changeMaxPricePerRoomType
  | roomRulesType
  | changeNumberOfBedroomsType
  | changeNumberOfBedsType
  | changeNumberOfBathroomsType
  | choiceOfAvailabilityType;

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

export const changeMinPricePerRoomAction = (minPricePerRoom: number) => <changeMinPricePerRoomType>{
  type: MIN_PRICE_PER_ROOM,
  payload: {
    minPricePerRoom
  }
}

export const changeMaxPricePerRoomAction = (maxPricePerRoom: number) => <changeMaxPricePerRoomType>{
  type: MAX_PRICE_PER_ROOM,
  payload: {
    maxPricePerRoom
  }
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

export const roomRulesAction = (
  smoke: boolean,
  pets: boolean,
  guests: boolean
) => <roomRulesType>{
  type: ROOM_RULES,
  payload: {
    smoke,
    pets,
    guests,
  }
}

export const choiceOfAvailabilityAction = (
  wideCorridor: true | undefined,
  assistant: true | undefined
) => <choiceOfAvailabilityType>{
  type: CHOICE_OF_AVAILABILITY,
  payload: {
    wideCorridor,
    assistant
  }
}

export const changeNumberOfBedroomsAction = (
  numberOfBedrooms: number | undefined
) => <changeNumberOfBedroomsType>{
  type: CHANGE_NUMBER_OF_BEDROOMS,
  payload: {
    numberOfBedrooms
  }
}

export const changeNumberOfBedsAction = (
  numberOfBeds: number | undefined
) => <changeNumberOfBedsType>{
  type: CHANGE_NUMBER_OF_BEDS,
  payload: {
    numberOfBeds
  }
}

export const changeNumberOfBathroomsAction = (
  numberOfBathrooms: number | undefined
) => <changeNumberOfBathroomsType>{
  type: CHANGE_NUMBER_OF_BATHROOMS,
  payload: {
    numberOfBathrooms
  }
}



