import {
  ADDITIONAL_AMENITIES,
  CHANGE_AMOUNT_GUESTS,
  CHANGE_DATE_ARRIVAL,
  CHANGE_DATE_DEPARTURE,
  CHANGE_NUMBER_OF_BATHROOMS,
  CHANGE_NUMBER_OF_BEDROOMS,
  CHANGE_NUMBER_OF_BEDS,
  CHOICE_OF_AVAILABILITY,
  CLEAR_AMOUNT_GUESTS,
  filteredRoomsActionType,
  MAX_PRICE_PER_ROOM,
  MIN_PRICE_PER_ROOM,
  ROOM_RULES,
} from "../actions/filterRoomsActions";

export interface IFilteredRoomsReducerInitialStore {
  dateArrival: string | undefined,
  dateDeparture: string | undefined,
  quantityAdults: number,
  quantityChildren: number,
  quantityBabies: number,
  minPricePerRoom: number,
  maxPricePerRoom: number,
  smoke: boolean,
  pets: boolean,
  guests: boolean,
  numberOfBedrooms: number | undefined,
  numberOfBeds: number | undefined,
  numberOfBathrooms: number | undefined,
  wideCorridor: true | undefined,
  assistant: true | undefined,
  desktop: boolean,
  crib: boolean,
  television: boolean,
  airConditioner: boolean
}

const initialStore: IFilteredRoomsReducerInitialStore = {
  dateArrival: undefined,
  dateDeparture: undefined,
  quantityAdults: 0,
  quantityChildren: 0,
  quantityBabies: 0,
  minPricePerRoom: 2500,
  maxPricePerRoom: 7500,
  smoke: false,
  pets: false,
  guests: false,
  numberOfBedrooms: 1,
  numberOfBeds: 1,
  numberOfBathrooms: 1,
  wideCorridor: undefined,
  assistant: undefined,
  desktop: false,
  crib: false,
  television: false,
  airConditioner: false
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
    case ROOM_RULES: {
      return {
        ...store,
        smoke: action.payload.smoke,
        pets: action.payload.pets,
        guests: action.payload.guests,
      }
    }
    case CHANGE_NUMBER_OF_BEDROOMS: {
      return {
        ...store,
        numberOfBedrooms: action.payload.numberOfBedrooms
      }
    }
    case CHANGE_NUMBER_OF_BEDS: {
      return {
        ...store,
        numberOfBeds: action.payload.numberOfBeds
      }
    }
    case CHANGE_NUMBER_OF_BATHROOMS: {
      return {
        ...store,
        numberOfBathrooms: action.payload.numberOfBathrooms
      }
    }
    case CHOICE_OF_AVAILABILITY: {
      return {
        ...store,
        wideCorridor: action.payload.wideCorridor,
        assistant: action.payload.assistant,
      }
    }
    case ADDITIONAL_AMENITIES: {
      return {
        ...store,
        desktop: action.payload.desktop,
        crib: action.payload.crib,
        television: action.payload.television,
        airConditioner: action.payload.airConditioner,
      }
    }
    default:
      return store;
  }
}