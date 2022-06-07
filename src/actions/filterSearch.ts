import roomType from "../reducers/roomsReducer"
// export const ADD_CHAT = '@@chat/ADD_CHAT';

// export const addChat = (title) => ({
//   type: ADD_CHAT,
//   title,
// });

type getRoomsAction = (rooms: typeof roomType[]) => { type: typeof GET_ALL_ROOMS }

export const GET_ALL_ROOMS = '@@rooms/GET_ALL_ROOMS';

export const getRooms: getRoomsAction = (rooms) => ({
  type: GET_ALL_ROOMS,
  payload: {
    rooms
  }
});

export const getRoomsThunk = () => async (dispatch, getState) => {

  const response = await fetch('http://localhost:3000/rooms/api/all', {
    method: 'GET'
  })
    .then(res => res.json())
  dispatch(getRooms(response))
}


