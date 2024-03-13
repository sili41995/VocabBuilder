import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IProps } from './NavLinks.types';
import { List, ListItem } from './NavLinks.styled';

const NavLinks: FC<IProps> = ({ navLinks }) => (
  <List>
    {navLinks.map(({ path, title }) => (
      <ListItem>
        <NavLink to={path} key={path}>
          {title}
        </NavLink>
      </ListItem>
    ))}
  </List>
);

export default NavLinks;
