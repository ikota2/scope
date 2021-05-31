import styled from 'styled-components';

const StyledIncrementButton = styled.button`
  display: block;
  width: 92px;
  height: 92px;
  cursor: pointer;
  
  border: 0;
  border-radius: 5px;
  
  background: #FDD207;

  margin-right: 22px;

  &:after {
    content: '+';
    font-size: 72px;
    padding-bottom: 10px;
  }
`;
 
interface IIncrementButtonProps {
  children?: React.ReactNode;
  onClick?: () => number;
} 

export function IncrementButton({children, onClick}: IIncrementButtonProps) {
  return (
    <StyledIncrementButton onClick={onClick}>
      {children}
    </StyledIncrementButton>
  );
}