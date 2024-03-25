import { FC } from 'react';
import { IProps } from './WordsTable.types';
import {
  Body,
  Container,
  Head,
  Header,
  Row,
  Table,
  Title,
} from './WordsTable.styled';
import UK from '@/icons/uk.svg?react';
import Ukraine from '@/icons/Ukraine.svg?react';
import { useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';
import WordsTableItem from '../WordsTableItem';

const WordsTable: FC<IProps> = ({ words }) => {
  const { pathname } = useLocation();
  const isRecommendPage = pathname.includes(PagePaths.recommend);

  return (
    <Container>
      <Table>
        <Head>
          <Row radius={8} isRecommendPage={isRecommendPage}>
            <Header>
              <Title>Word</Title>
              <UK />
            </Header>
            <Header>
              <Title>Translation</Title>
              <Ukraine />
            </Header>
            <Header>Category</Header>
            {!isRecommendPage && <Header>Progress</Header>}
            <Header></Header>
          </Row>
        </Head>
        <Body>
          {words.map((word) => (
            <WordsTableItem
              key={word._id}
              word={word}
              isRecommendPage={isRecommendPage}
            />
          ))}
        </Body>
      </Table>
    </Container>
  );
};

export default WordsTable;
