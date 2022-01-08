import styled from 'styled-components';
import { baseCss, padding } from './baseCss';

const BaseButton = styled.button`
  color: ${({ theme }) => theme.color};
  background-color: ${(props) => props.theme.backgroundColor}
  ${padding}
  ${baseCss}
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #222;
  border-radius: 10px;
`;

export { BaseButton };
