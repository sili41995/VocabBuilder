import { Filters, InputClick } from '@/types/types';

export interface IProps {
  filters: Filters;
  action: (e: InputClick) => void;
  name: string;
}

export interface IStyledProps {
  isActive: boolean;
}
