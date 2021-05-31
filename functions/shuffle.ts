const wordsList = 'человек год время дело жизнь день рука раз работа слово место лицо друг глаз вопрос дом сторона страна мир случай голова ребенок сила конец вид система часть город отношение женщина деньги земля машина вода отец проблема час право нога решение дверь образ история власть закон война бог голос тысяча книга возможность результат ночь стол имя область статья число компания народ жена группа развитие процесс суд условие средство начало свет пора путь душа уровень форма связь минута улица вечер качество мысль дорога мать действие месяц государство язык любовь взгляд мама век школа цель общество деятельнось организация президент комната'.split(' ');

export function shuffle(array: string[]) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}