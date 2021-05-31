export function setParts(arr: string[]) {
  const parts = [];
  for (let word of arr) {
    const firstPart = word.split('').slice(0, Math.floor(word.length / 2)).join('');
    const secondPart = word.split('').slice(Math.floor(word.length / 2), word.length).join('');
    const part = [firstPart, secondPart];
    parts.push(part);
  }
  return parts;
}
