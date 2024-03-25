import { FC } from 'react';
import { IProps } from './ProgressIndicator.types';
import { Circle, Emptiness } from './ProgressIndicator.styled';

const ProgressIndicator: FC<IProps> = ({ progress }) => (
  <Circle progress={progress}>
    <Emptiness></Emptiness>
  </Circle>
);

export default ProgressIndicator;
