import React from 'react';

import h2hlogo from 'assets/img/logo/h2h_logo.png';

import {
  Navbar,
  NavbarBrand,
  // NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends React.Component {
  render() {

    return (
      <Navbar light expand className='ch-header bg-white'>
        <NavbarBrand href="/" className='mr-auto'>
        <img 
          src={h2hlogo}
          alt='charity logo'
          style={{ width: 32, height: 24}}
        />
        <span className='ml-2'>От сердца к серду</span>  
        </NavbarBrand>
        <Nav navbar className='nav mr-2' role='navigation'>
          <NavItem>
              <NavLink href="/login/" className='border-left-0'>Срочно</NavLink>
          </NavItem>
          <NavItem > 
              <NavLink href="/login/">Новости</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/logout/">Учреждения</NavLink>
          </NavItem>
          <NavItem>
                <NavLink href="/login/">Отчеты</NavLink>
          </NavItem>
        </Nav>
  
        <Nav navbar className='flex-row justify-content-end ml-auto'>
        <NavItem>
              <NavLink href="/login/" className='border-left-0'>Войти</NavLink>
          </NavItem>
          <NavItem > 
              <NavLink href="/register/">Зарегистрироваться</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
