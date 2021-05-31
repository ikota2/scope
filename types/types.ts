export const SET_QUANTITY_WORDS = 'SET_QUANTITY_WORDS';
export const SET_QUANTITY_LETTERS = 'SET_QUANTITY_LETTERS';
export const SET_STARTING_DISTANCE = 'SET_STARTING_DISTANCE';
export const SET_FINISH_DISTANCE = 'SET_FINISH_DISTANCE';
export const SET_SPEED = 'SET_SPEED';


// types for OptionBox.tsx and quantitiesReducer
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