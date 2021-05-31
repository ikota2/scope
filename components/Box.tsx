import styled from 'styled-components'

const StyledBox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: center;
  align-items: center;
  
  box-sizing: border-box;
  width: 708px;
  height: 220px;
  box-shadow: ${props => props.boxShadow || '0px 4px 4px rgba(0, 0, 0, 0.25)'};
  border-radius: ${props => props.borderRadius || '48px'};

  margin-bottom: 38px;
  margin-right: 40px;
  padding-left: 63px;
  padding-right: 63px;
`;

interface IBoxProps {
  children: React.ReactNode;
  flexDirection?: string;
  boxShadow?: string;
  borderRadius?: string;
}

export function Box({children, flexDirection, borderRadius, boxShadow}: IBoxProps) {
  return (
    <StyledBox flexDirection={flexDirection} boxShadow={boxShadow} borderRadius={borderRadius} >
      {children}
    </StyledBox>
  );
}