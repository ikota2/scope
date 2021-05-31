import React from 'react';
import styled, { css } from 'styled-components';

const StyledTitle = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};

  margin-right: ${props => props.marginRight || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  width: ${props => props.width};

  font-family: 'Roboto', sans-serif; 
  font-weight: 700;
  font-size: ${props => props.size};
  text-align: center;
  color: ${props => props.color || '#000'};
    ${props => props.primary && css`
      color: '#371548';
    `};
  `;

interface ITitleProps {
  children?: React.ReactNode;
  size?: string;
  color?: string;
  primary?: boolean;
  marginRight?: string;
  marginLeft?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
}

export function Title({children, size, color, marginRight, marginLeft, justifyContent, alignItems, width, primary}: ITitleProps) {
  return (
    <StyledTitle size={size} color={color} marginRight={marginRight} marginLeft={marginLeft} justifyContent={justifyContent} alignItems={alignItems} width={width} primary={primary}>
      {children}
    </StyledTitle>
  );
}
