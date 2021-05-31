
import { connect } from 'react-redux';

import { makeStepsFromObj } from "../functions/makeStepsFromObj";

import { IOptionProperty } from "../types/types";

import { Box } from "./Box";
import { InputRange } from "./InputRange";
import { InputWrapper } from "./InputWrapper";
import { StepsWrapper } from "./StepsWrapper";
import { Title } from "./Title";


interface IOptionBoxProps {
  setQuantityWords: (arg0: number) => number, 
  setQuantityLetters: (arg0: number) => number, 
  setStartingDistance: (arg0: number) => number, 
  setFinishDistance: (arg0: number) => number, 
  setSpeed: (arg0: number) => number, 
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

const mapDispatchToProps = (dispatch) => {
  return {
    setQuantityWords: (value: number) => dispatch({ type: 'SET_QUANTITY_WORDS', value }),
    setQuantityLetters: (value: number) => dispatch({ type: 'SET_QUANTITY_LETTERS', value }),
    setStartingDistance: (value: number) => dispatch({ type: 'SET_STARTING_DISTANCE', value }),
    setFinishDistance: (value: number) => dispatch({ type: 'SET_FINISH_DISTANCE', value }),
    setSpeed: (value: number) => dispatch({ type: 'SET_SPEED', value }),
  };
}

export default connect(null, mapDispatchToProps)(OptionBox);
