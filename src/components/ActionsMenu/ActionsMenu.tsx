import { FC } from 'react';
import { Button, Container, List, ListItem, Title } from './ActionsMenu.styled';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { IProps } from './ActionsMenu.types';

const ActionsMenu: FC<IProps> = ({ onEditBtnClick, onDeleteBtnClick }) => {
  return (
    <Container>
      <List>
        <ListItem>
          <Button type='button' onClick={onEditBtnClick}>
            <FiEdit2 size={16} />
            <Title>Edit</Title>
          </Button>
        </ListItem>
        <ListItem>
          <Button type='button' onClick={onDeleteBtnClick}>
            <FiTrash2 size={16} />
            <Title>Delete</Title>
          </Button>
        </ListItem>
      </List>
    </Container>
  );
};

export default ActionsMenu;
