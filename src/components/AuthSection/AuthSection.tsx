import { FC } from 'react';
import Container from '@/components/Container';
import { IProps } from './AuthSection.types';
import { Section } from './AuthSection.styled';

const AuthSection: FC<IProps> = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
);

export default AuthSection;
