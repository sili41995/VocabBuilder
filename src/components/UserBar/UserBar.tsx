import { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/redux/auth/selectors';
import { AvatarWrap, Container, Name } from './UserBar.styled';
import { HiUser } from 'react-icons/hi2';

const UserBar: FC = () => {
  const { name } = useAppSelector(selectUser);

  return (
    <Container>
      <Name>{name}</Name>
      <AvatarWrap>
        <HiUser size={24} />
      </AvatarWrap>
    </Container>
  );
};

export default UserBar;
