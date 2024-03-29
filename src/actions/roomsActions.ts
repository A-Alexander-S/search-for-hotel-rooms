import { IRoom } from "../reducers/roomsReducer"
import { GET_ROOMS_ALL_URL } from "../utils/constants";

export const GET_ALL_ROOMS_REQUEST = '@@rooms/GET_ALL_ROOMS_REQUEST';
export const GET_ALL_ROOMS_SUCCESS = '@@rooms/GET_ALL_ROOMS_SUCCESS';
export const GET_ALL_ROOMS_FAILURE = '@@rooms/GET_ALL_ROOMS_FAILURE';

//Initial get request actions
type getRoomsRequestActionType = {
  type: typeof GET_ALL_ROOMS_REQUEST,
}

type getRoomsSuccessActionType = {
  type: typeof GET_ALL_ROOMS_SUCCESS,
  payload: {
    rooms: IRoom[]
  }
}

type getRoomsFailureActionType = {
  type: typeof GET_ALL_ROOMS_FAILURE,
  payload: any
}

export type roomsActionType =
  getRoomsRequestActionType
  | getRoomsSuccessActionType
  | getRoomsFailureActionType;

/**
* initial get all rooms actions
*/
export const getRoomsRequestAction = () => <getRoomsRequestActionType>({
  type: GET_ALL_ROOMS_REQUEST
});

export const getRoomsSuccessAction = (rooms: IRoom[]) => <getRoomsSuccessActionType>({
  type: GET_ALL_ROOMS_SUCCESS,
  payload: {
    rooms
  }
});

export const getRoomsFailureAction = (e) => <getRoomsFailureActionType>({
  type: GET_ALL_ROOMS_FAILURE,
  payload: e
});

export const getRoomsThunk = () => async (dispatch, getState) => {
  dispatch(getRoomsRequestAction());
  fetch(GET_ROOMS_ALL_URL)
    .then<IRoom[]>(res => res.json())
    .then(date => {
      dispatch(getRoomsSuccessAction(date));
    })
    .catch(e => dispatch.getRoomsFailureAction(e));
}

