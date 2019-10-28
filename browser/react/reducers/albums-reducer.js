import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../constants';

const initialState = {
  list: [],
  selected: {},
}

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALBUM:
      return {...state, selected: action.album}
    case RECEIVE_ALBUMS:
      return {...state, list: action.albums}
    default:
      return state;
  }
}