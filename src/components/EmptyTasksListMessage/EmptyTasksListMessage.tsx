import { FC } from 'react';
import {
  Container,
  Image,
  Text,
  ContentWrap,
  Title,
  Buttons,
  Button,
} from './EmptyTasksListMessage.styled';
import task from '@/images/task.png';
import { Link } from 'react-router-dom';
import { PagePaths } from '@/constants';

const EmptyTasksListMessage: FC = () => (
  <Container>
    <ContentWrap>
      <Title>You don't have a single word to learn right now.</Title>
      <Text>
        Please create or add a word to start the workout. We want to improve
        your vocabulary and develop your knowledge, so please share the words
        you are interested in adding to your study.
      </Text>
      <Buttons>
        <Link to={PagePaths.dictionary}>Add word</Link>
        <Button type='button'>Cancel</Button>
      </Buttons>
    </ContentWrap>
    <Image src={task} alt='task' />
  </Container>
);

export default EmptyTasksListMessage;
