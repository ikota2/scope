import { OptionActionTypes, OptionAction, IOptions } from '../types/types';

const options: IOptions = {
  startingDistance: 25,
  incrementedDistance: 25,
  quantityWords: 6,
  quantityLetters: 8,
  speed: 1,
}
const initialState = options;
  
export function optionsReducer(state = initialState, action: OptionAction) {
  switch (action.type) {
    case OptionActionTypes.SET_STARTING_DISTANCE:
      return {...state, startingDistance: action.value};
    case OptionActionTypes.SET_FINISH_DISTANCE:
      return {...state, incrementedDistance: action.value };
    case OptionActionTypes.SET_QUANTITY_WORDS:
      return {...state, quantityWords: action.value };
    case OptionActionTypes.SET_QUANTITY_LETTERS:
      return {...state, quantityLetters: action.value };
    case OptionActionTypes.SET_SPEED: 
      return {...state, speed: action.value};  
    default:
      return state;
  }
}
