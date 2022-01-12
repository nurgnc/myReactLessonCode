import styled from 'styled-components';
import { BaseButton } from './BaseButton';

const StyledButton = styled(BaseButton)`
  color: ${({ theme }) => theme.color};
`;

export { StyledButton };
