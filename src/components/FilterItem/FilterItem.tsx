import { FC, useState } from 'react';
import { Input, InputWrap } from './FilterItem.styled';
import ToggleMenuBtn from '@/components/ToggleMenuBtn';
import FiltersMenu from '@/components/FiltersMenu';
import { InputClick } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import { IProps } from './FilterItem.types';

const FilterItem: FC<IProps> = ({ name, filters, value, placeholder }) => {
  const [showFiltersList, setShowFiltersList] = useState<boolean>(false);
  const { updateSearchParams } = useSetSearchParams();

  const onToggleMenuBtnClick = () => {
    setShowFiltersList((prevState) => !prevState);
  };

  const onMenuItemClick = (e: InputClick) => {
    const { name, value } = e.currentTarget;

    updateSearchParams({ key: name, value });
    setShowFiltersList(false);
  };

  return (
    <InputWrap>
      <Input value={value} type='text' placeholder={placeholder} disabled />
      <ToggleMenuBtn
        onClick={onToggleMenuBtnClick}
        showFiltersList={showFiltersList}
      />
      {showFiltersList && (
        <FiltersMenu filters={filters} action={onMenuItemClick} name={name} />
      )}
    </InputWrap>
  );
};

export default FilterItem;
