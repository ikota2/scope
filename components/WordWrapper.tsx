import styled from 'styled-components';

const StyledWordWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export function WordWrapper({children}) {
  return (
    <StyledWordWrapper>
      {children}
    </StyledWordWrapper>
  );
}
