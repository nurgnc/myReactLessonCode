import React from 'react';
import ChangeThemeButton from './ChangeThemeButton';
import { StyledButton, BaseButton, PrimaryButton } from '../styledComponents';

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <BaseButton type="submit">base button</BaseButton>
      <StyledButton as="a" href="http://google.com">
        styled button
      </StyledButton>
      <PrimaryButton variant="outline">Outline</PrimaryButton>
      <PrimaryButton>Outline</PrimaryButton>

      <ChangeThemeButton />
    </>
  );
};

export default Home;
