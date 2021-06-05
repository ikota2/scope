
import { connect } from 'react-redux';

import { makeStepsFromObj } from "../functions/makeStepsFromObj";

import { setSpeed, setFinishDistance, setStartingDistance, setQuantityLetters, setQuantityWords } from '../redux/actionCreators';
import { IOptionProperty } from "../types/types";

import { Box } from "./Box";
import { InputRange } from "./InputRange";
import { InputWrapper } from "./InputWrapper";
import { StepsWrapper } from "./StepsWrapper";
import { Title } from "./Title";


interface IOptionBoxProps {
  setQuantityWords: (arg0: number) => void, 
  setQuantityLetters: (arg0: number) => void, 
  setStartingDistance: (arg0: number) => void, 
  setFinishDistance: (arg0: number) => void, 
  setSpeed: (arg0: number) => void, 
  title: string, 
  option: IOptionProperty,
}

const OptionBox = (props: IOptionBoxProps) => {
  const {
    setQuantityWords, 
    setQuantityLetters, 
    setStartingDistance, 
    setFinishDistance, 
    setSpeed, 
    title, 
    option,
  } = props;
  return (
    <Box>
      <Title size={'48px'} color={'#371548'}>{title}</Title>
      <StepsWrapper>
        {makeStepsFromObj(option).map((step: number, index: number) => {
          return (
            <Title 
              size={'38px'} 
              color={'#000'}  
              justifyContent={'space-between'}
              width={option.title === 'Сколько слов' || option.title === 'Сколько букв в словах' ? '10%' : '12.5%'}
              key={index}
            >
              {step}
            </Title>
          );
        })}
      </StepsWrapper>
      <InputWrapper>
        <InputRange
          type="range" 
          min={option.steps.start} 
          max={option.steps.end} 
          step={option.steps.step}
          onChange={e => 
            option.title === 'Сколько слов' ? setQuantityWords(+e.target.value) :
            option.title === 'Сколько букв в словах' ? setQuantityLetters(+e.target.value) :
            option.title === 'Стартовое расстояние' ? setStartingDistance(+e.target.value) :
            option.title === 'Увеличение расстояния' ? setFinishDistance(+e.target.value) :
            setSpeed(+e.target.value)
          } 
        />
      </InputWrapper>
    </Box>
  );
}

const actionCreators = {
  setSpeed, setFinishDistance, setStartingDistance, setQuantityLetters, setQuantityWords
}

export default connect(null, actionCreators)(OptionBox);
