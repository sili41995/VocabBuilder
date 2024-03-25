import { FC } from 'react';
import { IProps } from './WordsPagination.types';

const WordsPagination: FC<IProps> = ({ page, perPage, totalPages }) => {
  console.log(page);
  console.log(perPage);
  console.log(totalPages);
  return <div>WordsPagination</div>;
};

export default WordsPagination;
