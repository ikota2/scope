import styled from 'styled-components'

const StyledStepsWrapper = styled.div`
  box-sizing: border-box;
  
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 14px;
  margin-left: -5%;
  margin-right: -5%;
`;

export function StepsWrapper({children}) {
    return (
      <StyledStepsWrapper>
        {children}
      </StyledStepsWrapper>
    );
}