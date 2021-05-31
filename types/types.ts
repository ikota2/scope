export const SET_QUANTITY_WORDS = 'SET_QUANTITY_WORDS';
export const SET_QUANTITY_LETTERS = 'SET_QUANTITY_LETTERS';
export const SET_STARTING_DISTANCE = 'SET_STARTING_DISTANCE';
export const SET_FINISH_DISTANCE = 'SET_FINISH_DISTANCE';
export const SET_SPEED = 'SET_SPEED';

export enum OptionActionTypes {
  SET_QUANTITY_WORDS = 'SET_QUANTITY_WORDS',
  SET_QUANTITY_LETTERS = 'SET_QUANTITY_LETTERS',
  SET_STARTING_DISTANCE = 'SET_STARTING_DISTANCE',
  SET_FINISH_DISTANCE = 'SET_FINISH_DISTANCE',
  SET_SPEED = 'SET_SPEED',
}

interface SetQuantityWordsAction {
    type: OptionActionTypes.SET_QUANTITY_WORDS;
    value: string;
}
interface SetQuantityLettersAction {
    type: OptionActionTypes.SET_QUANTITY_LETTERS;
    value: string;
}
interface SetStartingDistanceAction {
    type: OptionActionTypes.SET_STARTING_DISTANCE;
    value: string;
}
interface SetFinishDistanceAction {
    type: OptionActionTypes.SET_FINISH_DISTANCE;
    value: string;
}
interface SetSpeedAction {
    type: OptionActionTypes.SET_SPEED;
    value: string;
}

export type OptionAction = SetQuantityWordsAction | SetQuantityLettersAction | SetStartingDistanceAction | SetFinishDistanceAction | SetSpeedAction;



interface IOptionBox {
  children?: any;
  flexDirection?: string;
}

interface ISteps {
  start: number;
  step: number;
  end: number;
}

export interface IOptionProperty {
  title: string;
  steps: ISteps;
}

export interface IQuantities {
  optionProperties: IOptionProperty[];
  speed: number;
}

export interface IOptions {
  startingDistance: number,
  incrementedDistance: number,
  quantityWords: number,
  quantityLetters: number,
  speed: number,
}