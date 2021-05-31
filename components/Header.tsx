import styled from 'styled-components'
import { Title } from './Title';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Header() {
  return (
    <StyledHeader>
      <Title size={'64px'} color={'#2c3172'}>Тренажер «Поле зрения»</Title>
    </StyledHeader>
  );
}