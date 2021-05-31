import { connect } from "react-redux"
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import { RootState } from "../redux/store"

import { shuffle } from "../functions/shuffle"
import { setParts } from '../functions/setParts';

import { Header } from "../components/Header";
import { MainDiv } from "../components/MainDiv"
import { Title } from "../components/Title"
import { WordWrapper } from "../components/WordWrapper"

const words = 'человек год время дело жизнь день рука раз работа слово место лицо друг глаз вопрос дом сторона страна мир случай голова ребенок сила конец вид система часть город отношение женщина деньги земля машина вода отец проблема час право нога решение дверь образ история власть закон война бог голос тысяча книга возможность результат ночь стол имя область статья число компания народ жена группа развитие процесс суд условие средство начало свет пора путь душа уровень форма связь минута улица вечер качество мысль дорога мать действие месяц государство язык любовь взгляд мама век школа цель общество деятельнось организация президент комната'.split(' ');

const Task = ({options}) => {
  const wordsShuffledFilteredAndSliced = shuffle(words)
    .filter((word: string) => word.length === options.quantityLetters)
    .slice(0, options.quantityWords);
  
  const [margin, setMargin] = useState(options.startingDistance);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (start !== wordsShuffledFilteredAndSliced.length) {
      setTimeout(() => {
        setMargin(options.startingDistance + options.incrementedDistance);
        setStart(start + 1);
        setEnd(end + 1);
      }, options.speed * 1000)
    }
    if (start === wordsShuffledFilteredAndSliced.length) {
      router.push("/finish");
    }
  }, [wordsShuffledFilteredAndSliced]);
  
    return (
      <>
        <Header />
          <MainDiv>
            {setParts(wordsShuffledFilteredAndSliced)
              .slice(start, end)
              .map((part: string[], index: number) => {
                return (
                  <WordWrapper key={index}>
                    <Title size={'60px'} primary marginRight={`${margin}px`}>{part[0]}</Title>
                    <Title size={'60px'} primary>~</Title>
                    <Title size={'60px'} primary marginLeft={`${margin}px`}>{part[1]}</Title>
                  </WordWrapper>
                );
              })
            }
          </MainDiv>
      </>
    )
}

const mapStateToProps = (state: RootState) => ({
  options: state.options
})

export default connect(mapStateToProps)(Task);
