import styled from 'styled-components'
import Link from 'next/link';

const StyledLinkButton = styled.a`
  display: block;
  box-sizing: border-box;
  width: 389px;
  height: 109px;
  margin-right: 22px;
  padding-top: 26px;

  border-radius: 81px;
  border: 0;
  
  font-size: 49px;
  font-family: 'Roboto', sans-serif; 
  font-weight: 700;
  text-align: center;

  background: #FDD207;
  color: #371548;

  cursor: pointer;
  text-decoration: none;
`;
 
interface IButtonProps {
  children?: React.ReactNode;
  href?: string;
} 

export function LinkButton({children, href}: IButtonProps) {
  return (
    <Link href={href} passHref>
      <StyledLinkButton>{children}</StyledLinkButton>
    </Link>
  );
}
