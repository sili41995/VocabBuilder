import { FC } from 'react';
import { IProps } from './WordsPagination.types';
import { getPageNumbers, getWordsPaginationSettings, makeBlur } from '@/utils';
import { IOnPageBtnClickProps } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';
import { Button, Item, List, TemplateItem } from './WordsPagination.styled';
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from 'react-icons/fa';

const WordsPagination: FC<IProps> = ({ currentPage, totalPages, step = 2 }) => {
  const { updateSearchParams } = useSetSearchParams();
  const pageNumbers = getPageNumbers(totalPages);
  const {
    firstPage,
    lastPage,
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    isShowFirstPageBtn,
    isShowPrevTemplateBtn,
    isValidPage,
  } = getWordsPaginationSettings({
    pageNumbers,
    currentPage,
    step,
  });

  const onPageBtnClick = ({ e, page }: IOnPageBtnClickProps): void => {
    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.page, value: String(page) });
  };

  return (
    <List>
      <Item>
        <Button
          disabled={isBackNavBtnDisable}
          onClick={(e) => {
            onPageBtnClick({ e, page: firstPage });
          }}
        >
          <FaAngleDoubleLeft size={16} />
        </Button>
      </Item>
      <Item>
        <Button
          disabled={isBackNavBtnDisable}
          onClick={(e) => {
            onPageBtnClick({ e, page: currentPage - 1 });
          }}
        >
          <FaAngleLeft size={16} />
        </Button>
      </Item>
      {isShowFirstPageBtn && (
        <Item>
          <Button
            onClick={(e) => {
              onPageBtnClick({ e, page: firstPage });
            }}
          >
            {firstPage}
          </Button>
        </Item>
      )}
      {isShowPrevTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isValidPage &&
        pageNumbers.map((number) => (
          <Item
            key={number}
            page={number}
            currentPage={currentPage}
            step={step}
          >
            <Button
              isActive={number === currentPage}
              onClick={(e) => {
                onPageBtnClick({ e, page: number });
              }}
            >
              {number}
            </Button>
          </Item>
        ))}
      {isShowNextTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isShowLastPageBtn && (
        <Item>
          <Button
            onClick={(e) => {
              onPageBtnClick({ e, page: lastPage });
            }}
          >
            {lastPage}
          </Button>
        </Item>
      )}
      <Item>
        <Button
          disabled={isNextNavBtnDisable}
          onClick={(e) => {
            onPageBtnClick({ e, page: currentPage + 1 });
          }}
        >
          <FaAngleRight size={16} />
        </Button>
      </Item>
      <Item>
        <Button
          disabled={isNextNavBtnDisable}
          onClick={(e) => {
            onPageBtnClick({ e, page: lastPage });
          }}
        >
          <FaAngleDoubleRight size={16} />
        </Button>
      </Item>
    </List>
  );
};

export default WordsPagination;
