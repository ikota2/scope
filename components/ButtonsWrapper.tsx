import styled from 'styled-components';

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface IButtonsWrapperProps {
  children: React.ReactNode
}

export function ButtonsWrapper({children}: IButtonsWrapperProps) {
  return (
    <StyledButtonsWrapper>
      {children}
    </StyledButtonsWrapper>
  );
}