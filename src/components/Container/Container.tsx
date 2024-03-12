import { FC } from 'react';
import { StyledContainer } from './Container.styled';
import { IProps } from './Container.types';

const Container: FC<IProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
