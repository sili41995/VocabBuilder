import { InputTypes } from '@/constants';
import { ReactNode } from 'react';

export interface IProps {
  type: InputTypes;
  settings: object;
  placeholder: string;
  button?: ReactNode;
}
