import { SET_QUANTITY_WORDS, SET_QUANTITY_LETTERS, SET_STARTING_DISTANCE, SET_FINISH_DISTANCE, SET_SPEED, IOptions } from '../types/types';

const options: IOptions = {
  startingDistance: 25,
  incrementedDistance: 25,
  quantityWords: 6,
  quantityLetters: 8,
  speed: 1,
}
const initialState = options;
  
export function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STARTING_DISTANCE:
      return {...state, startingDistance: action.value};
    case SET_FINISH_DISTANCE:
      return {...state, incrementedDistance: action.value };
    case SET_QUANTITY_WORDS:
      return {...state, quantityWords: action.value };
    case SET_QUANTITY_LETTERS:
      return {...state, quantityLetters: action.value };
    case SET_SPEED: 
      return {...state, speed: action.value};  
    default:
      return state;
  }
}
