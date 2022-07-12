import {
  CHANGE_AMOUNT_GUESTS,
  CHANGE_DATE_ARRIVAL,
  CHANGE_DATE_DEPARTURE,
  CLEAR_AMOUNT_GUESTS,
  filteredRoomsActionType,
  MAX_PRICE_PER_ROOM,
  MIN_PRICE_PER_ROOM,
} from "../actions/filterRoomsActions";

export interface IFilteredRoomsReducerInitialStore {
  dateArrival: number | undefined,
  dateDeparture: number | undefined,
  quantityAdults: number,
  quantityChildren: number,
  quantityBabies: number,
  minPricePerRoom: number,
  maxPricePerRoom: number,
  smoke: boolean,
  pets: boolean,
  guests: boolean,
}

const initialStore: IFilteredRoomsReducerInitialStore = {
  dateArrival: undefined,
  dateDeparture: undefined,
  quantityAdults: 0,
  quantityChildren: 0,
  quantityBabies: 0,
  minPricePerRoom: 0,
  maxPricePerRoom: 0,
  smoke: false,
  pets: false,
  guests: false,
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
    case MIN_PRICE_PER_ROOM: {
      return {
        ...store,
        minPricePerRoom: action.payload.minPricePerRoom
      }
    }
    case MAX_PRICE_PER_ROOM: {
      return {
        ...store,
        maxPricePerRoom: action.payload.maxPricePerRoom
      }
    }
    default:
      return store;
  }
}