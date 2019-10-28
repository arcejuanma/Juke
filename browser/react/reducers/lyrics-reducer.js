import {SET_LYRICS} from '../constants';

const initialState = { text: '' };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_LYRICS: 
       return { ...state, text: action.lyric }; // https://redux.js.org/recipes/using-object-spread-operator
    default: 
       return state;
  }
}