import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: center;
  align-items: center;
`;

interface IInputWrapperProps {
  children?: React.ReactNode;
  flexDirection?: string;
}

export function InputWrapper({children, flexDirection}: IInputWrapperProps) {
  return (
    <StyledInputWrapper flexDirection={flexDirection}>
      {children}
    </StyledInputWrapper>
  );
}