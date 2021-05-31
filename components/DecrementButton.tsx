import styled from 'styled-components';

const StyledDecrementButton = styled.button`
  display: block;
  width: 92px;
  height: 92px;
  cursor: pointer;

  border: 0;
  border-radius: 5px;
  
  background: #FDD207;

  margin-right: 22px;

  &:after {
    content: '-';
    font-size: 66px;
  }
`;
 
interface IDecrementButtonProps {
  children?: React.ReactNode;
  onClick?: () => number;
  disabled: boolean;
} 

export function DecrementButton({children, disabled,onClick}: IDecrementButtonProps) {
  return (
    <StyledDecrementButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledDecrementButton>
  );
}