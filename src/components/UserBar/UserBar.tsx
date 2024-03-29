import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn, selectUser } from '@/redux/auth/selectors';
import {
  AvatarWrap,
  Container,
  LogOutBtn,
  Name,
  Title,
  UserWrap,
} from './UserBar.styled';
import { HiUser } from 'react-icons/hi2';
import { FaArrowRight } from 'react-icons/fa';
import { signOut } from '@/redux/auth/operations';
import { toasts } from '@/utils';

const UserBar: FC = () => {
  const { name } = useAppSelector(selectUser);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  const onLogOutBtnClick = () => {
    dispatch(signOut())
      .unwrap()
      .then((data) => {
        toasts.successToast(data.message);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <Container>
      <UserWrap>
        <Name>{name}</Name>
        <AvatarWrap>
          <HiUser size={24} />
        </AvatarWrap>
      </UserWrap>
      {isLoggedIn && (
        <LogOutBtn onClick={onLogOutBtnClick} type='button'>
          <Title>Log out</Title>
          <FaArrowRight size={16} />
        </LogOutBtn>
      )}
    </Container>
  );
};

export default UserBar;
