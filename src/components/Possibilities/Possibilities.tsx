import { FC } from 'react';
import people from '@/images/people.png';
import { Container, Description, Image } from './Possibilities.styled';

const Possibilities: FC = () => (
  <Container>
    <Image src={people} alt='people' width='498' height='435' />
    <Description>Word · Translation · Grammar · Progress</Description>
  </Container>
);

export default Possibilities;
