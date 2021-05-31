import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../redux/store';

import { IOptions } from '../types/types';

import { Box } from './Box';
import { ButtonsWrapper } from './ButtonsWrapper';
import { OutputNumber } from './OutputNumber';
import { InputWrapper } from './InputWrapper';
import { Title } from './Title';
import { DecrementButton } from './DecrementButton';
import { IncrementButton } from './IncrementButton';

interface ISpeedBoxProps {
  options: IOptions;
  setSpeed: (arg0: number) => number;
}

const SpeedBox = (props: ISpeedBoxProps) => {
  const {options, setSpeed} = props;
  return (
    <Box>
      <InputWrapper flexDirection={'row'}>
        <Title size={'48px'} color={'#371548'}>Скорость</Title>
        <OutputNumber>{options.speed}</OutputNumber>
        <Title size={'48px'} color={'#371548'}>сек.</Title>
      </InputWrapper>
      <ButtonsWrapper>
        <DecrementButton 
          onClick={() => setSpeed(+options.speed - 0.5)}
          disabled={+options.speed === 0 ? true : false} 
        />
        <IncrementButton onClick={() => setSpeed(+options.speed + 0.5)} />
      </ButtonsWrapper>
    </Box>
  );
}

const mapStateToProps = (state: RootState) => ({
  options: state.options
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeed: (value: number) => dispatch({ type: 'SET_SPEED', value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedBox);