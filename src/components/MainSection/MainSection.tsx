import { FC } from 'react';
import Container from '@/components/Container';
import { IProps } from './MainSection.types';
import { Section } from './MainSection.styled';

const MainSection: FC<IProps> = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
);

export default MainSection;
