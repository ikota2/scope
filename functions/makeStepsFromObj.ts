import { IOptionProperty } from '../types/types';

export function makeStepsFromObj(obj: IOptionProperty):number[] {
  const result = [];
  if (obj.title === 'Сколько слов') {
    for (let i = obj.steps.start; i <= obj.steps.end; i += obj.steps.step) {
      result.push(i);
    }
  }
  if (obj.title === 'Стартовое расстояние') {
    for (let i = obj.steps.start; i <= obj.steps.end; i += obj.steps.step) {
      result.push(i);
    }
  }
  if (obj.title === 'Сколько букв в словах') {
    for (let i = obj.steps.start; i <= obj.steps.end; i += obj.steps.step) {
      result.push(i);
    }
  }
  if (obj.title === 'Увеличение расстояния') {
    for (let i = obj.steps.start; i <= obj.steps.end; i += obj.steps.step) {
      result.push(i);
    }
  }
  return result;
}
