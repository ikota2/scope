
import { IOptionProperty } from '../types/types';

import { Header } from '../components/Header';
import { Title } from '../components/Title';
import { Box } from '../components/Box';
import { MainDiv } from '../components/MainDiv';
import { LinkButton } from '../components/LinkButton';
import SpeedBox from '../components/SpeedBox';
import OptionBox from '../components/OptionBox';

const optionProperties = [
  {title: 'Сколько слов', steps: {start: 1, step: 1, end: 10},}, 
  {title: 'Стартовое расстояние', steps: {start: 5, step: 5, end: 40},}, 
  {title: 'Сколько букв в словах', steps: {start: 3, step: 1, end: 12},},
  {title: 'Увеличение расстояния', steps: {start: 5, step: 5, end: 40},},
];

const Options = () => {
  return (
    <>
      <Header />
      <MainDiv>
        {optionProperties.map((option: IOptionProperty, index: number) => {
          return (<OptionBox option={option} title={option.title} key={index} />);
        })}
        <SpeedBox />
        <Box borderRadius={'none'} boxShadow={'0'}>
          <LinkButton href='/task'>
            <Title>СТАРТ</Title>
          </LinkButton>
        </Box>
      </MainDiv>
    </>
  )
}

export default Options;
