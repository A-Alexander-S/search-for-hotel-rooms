import {
  CHANGE_AMOUNT_GUESTS,
  CHANGE_DATE_ARRIVAL,
  CHANGE_DATE_DEPARTURE,
  CLEAR_AMOUNT_GUESTS,
  filteredRoomsActionType,
} from "../actions/filterRoomsActions";

export interface IFilteredRoomsReducerInitialStore {
  dateArrival: number | undefined,
  dateDeparture: number | undefined,
  quantityAdults: number,
  quantityChildren: number,
  quantityBabies: number,
}

const initialStore: IFilteredRoomsReducerInitialStore = {
  dateArrival: undefined,
  dateDeparture: undefined,
  quantityAdults: 0,
  quantityChildren: 0,
  quantityBabies: 0,
}

export default function filteredRoomsReducer(store = initialStore, action: filteredRoomsActionType) {
  switch (action.type) {
    case CHANGE_DATE_ARRIVAL: {
      return {
        ...store,
        dateArrival: action.payload.dateArrival
      }
    }
    case CHANGE_DATE_DEPARTURE: {
      return {
        ...store,
        dateDeparture: action.payload.dateDeparture
      }
    }
    case CHANGE_AMOUNT_GUESTS: {
      console.log('CHANGE_AMOUNT_GUESTS')
      return {
        ...store,
        quantityAdults: action.payload.quantityAdults,
        quantityChildren: action.payload.quantityChildren,
        quantityBabies: action.payload.quantityBabies,
      }
    }
    case CLEAR_AMOUNT_GUESTS: {
      return {
        ...store,
        quantityAdults: 0,
        quantityChildren: 0,
        quantityBabies: 0,
      }
    }
    default:
      return store;
  }
}