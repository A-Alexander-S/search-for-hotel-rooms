import { IRoom } from "../reducers/roomsReducer"
import { GET_ROOMS_ALL_URL } from "../utils/constants";

export const GET_ALL_ROOMS_REQUEST = '@@rooms/GET_ALL_ROOMS_REQUEST';
export const GET_ALL_ROOMS_SUCCESS = '@@rooms/GET_ALL_ROOMS_SUCCESS';
export const GET_ALL_ROOMS_FAILURE = '@@rooms/GET_ALL_ROOMS_FAILURE';

type getRoomsRequestAction = {
  type: typeof GET_ALL_ROOMS_REQUEST,
}

type getRoomsSuccessAction = {
  type: typeof GET_ALL_ROOMS_SUCCESS,
  payload: {
    rooms: IRoom[]
  }
}

type getRoomsFailureAction = {
  type: typeof GET_ALL_ROOMS_FAILURE,
  payload: any
}

export type ActionType =
  getRoomsRequestAction
  | getRoomsSuccessAction
  | getRoomsFailureAction;

export const getRoomsRequestAction = () => <getRoomsRequestAction>({
  type: GET_ALL_ROOMS_REQUEST
});

export const getRoomsSuccessAction = (rooms: IRoom[]) => <getRoomsSuccessAction>({
  type: GET_ALL_ROOMS_SUCCESS,
  payload: {
    rooms
  }
});

export const getRoomsFailureAction = (e) => <getRoomsFailureAction>({
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


