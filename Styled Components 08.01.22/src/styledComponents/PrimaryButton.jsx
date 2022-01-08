import styled from 'styled-components';
import { BaseButton } from './BaseButton';

const PrimaryButton = styled(BaseButton)`
background-color: ${(props) =>
  props.variant === 'outline' ? 'white' : '#2980b9'};
color: ${(props) => (props.variant === 'outline' ? '#2980b9' : 'white')};
&:hover {
  color: red;
}
`;

export { PrimaryButton };
