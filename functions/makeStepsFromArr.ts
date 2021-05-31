import { IOptionProperty } from '../types/types';

export interface IStepsInRange {
  howManyWords: number[];
  startingDistance: number[];
  howManyLettersInWords: number[];
  increasingDistance: number[];
}

export function makeStepsFromArr(arr: IOptionProperty[]) {
  const stepsInRange: IStepsInRange = {
    howManyWords: [], 
    startingDistance: [], 
    howManyLettersInWords: [], 
    increasingDistance: [],
  };
  for (let opt of arr) {
    switch (opt.title ) {
      case 'Сколько слов':
        stepsInRange.howManyWords = [];
        for (let i = opt.steps.start; i <= opt.steps.end; i += opt.steps.step) {
          stepsInRange.howManyWords.push(i);
        }
      case 'Стартовое расстояние':
        stepsInRange.startingDistance = [];
        for (let i = opt.steps.start; i <= opt.steps.end; i += opt.steps.step) {
          stepsInRange.startingDistance.push(i);
        }
      case 'Сколько букв в словах':
        stepsInRange.howManyLettersInWords = [];
        for (let i = opt.steps.start; i <= opt.steps.end; i += opt.steps.step) {
          stepsInRange.howManyLettersInWords.push(i);
        }
      case 'Увеличение расстояния':
        stepsInRange.increasingDistance = [];
        for (let i = opt.steps.start; i <= opt.steps.end; i += opt.steps.step) {
          stepsInRange.increasingDistance.push(i);
        }
      default:
        return stepsInRange
    }
  }
}
