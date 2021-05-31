import styled from 'styled-components'

const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: center;
  align-items: center;
`;

interface IMainDivProps {
  children?: React.ReactNode;
  flexDirection?: string;
}

export function MainDiv({children, flexDirection}:IMainDivProps) {
  return (
    <StyledMain flexDirection={flexDirection}>
      {children}
    </StyledMain>
  );
}
