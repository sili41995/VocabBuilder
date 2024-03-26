import styled from '@emotion/styled';
import { IStyledBtnProps, IStyledProps } from './WordsPagination.types';
import { setBtnDisplayProp } from '@/utils';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: ${({ theme }) => theme.spacing(7)};
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li<IStyledProps>`
  display: ${({ currentPage, page, step }) =>
    setBtnDisplayProp({ currentPage, page, step })};
`;

export const TemplateItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<IStyledBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid;
  border-color: ${({ isActive }) =>
    isActive ? 'transparent' : 'rgba(18, 20, 23, 0.1)'};
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? '#85AA9F' : 'transparent')};
  padding: 0;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.whiteColor : '#121417'};
  font-family: MacPaw Fixel Display;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.38;

  & > svg {
    display: block;
    color: #000000;
  }
`;
