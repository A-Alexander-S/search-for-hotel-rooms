import { FETCH_STATUSES } from '../utils/constants'
import {
  ActionType,
  GET_ALL_ROOMS_FAILURE,
  GET_ALL_ROOMS_REQUEST,
  GET_ALL_ROOMS_SUCCESS
} from "../actions/filterSearch";

export interface IRoom {
  id: number,
  roomNumber: number,
  price: number,
  countBedrooms: number,
  countBeds: number,
  countBathrooms: number,
  corridorWidth: number,
  desktop: boolean,
  chairForFeeding: boolean,
  crib: boolean,
  airConditioning: boolean,
  noiseAbsorbingWalls: boolean,
  windowInEveryBedroom: boolean,
  smoke: boolean,
  pets: boolean,
  guests: boolean,
  imgsRoom: string,
  rating: number,
  createdAt: string,
  updatedAt: string
}

export interface RoomsReducerInitialStore {
  rooms: IRoom[],
  status: string
}

const initialStore: RoomsReducerInitialStore = {
  rooms: [
    {
      "id": 1,
      "roomNumber": 1,
      "price": 5000,
      "countBedrooms": 2,
      "countBeds": 1,
      "countBathrooms": 1,
      "corridorWidth": 90,
      "desktop": true,
      "chairForFeeding": true,
      "crib": false,
      "airConditioning": false,
      "noiseAbsorbingWalls": true,
      "windowInEveryBedroom": true,
      "smoke": false,
      "pets": false,
      "guests": false,
      "imgsRoom": "/rooms-static/3652680e-ffe3-4c68-b28b-a229c9a8f6c6.jpeg",
      "rating": 5,
      "createdAt": "2022-05-12T13:50:45.589Z",
      "updatedAt": "2022-05-12T13:50:45.589Z"
    },
  ],
  status: FETCH_STATUSES.idle
}

export default function roomsReducer(store = initialStore, action: ActionType): RoomsReducerInitialStore {
  switch (action.type) {
    case GET_ALL_ROOMS_REQUEST: {
      return {
        ...store,
        status: FETCH_STATUSES.request
      }
    }
    case GET_ALL_ROOMS_SUCCESS: {
      return {
        ...store,
        rooms: [
          ...action.payload.rooms
        ],
        status: FETCH_STATUSES.success
      }
    }
    case GET_ALL_ROOMS_FAILURE: {
      return {
        ...store,
        status: FETCH_STATUSES.failure
      }
    }
    default:
      return store;
  }
}