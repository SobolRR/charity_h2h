import React from 'react';

import bn from 'utils/bemnames';

import h2hlogo from 'assets/img/logo/h2h_logo.png';

import {
  Navbar,
  NavbarBrand,
  // NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const bem = bn.create('header');

class Header extends React.Component {
  render() {
    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <NavbarBrand href="/" className={bem.e('logo', 'mr-auto')}>
        <img 
          src={h2hlogo}
          alt='charity logo'
          style={{ width: 32, height: 24}}
        />
        <span className='ml-2'>От сердца к серду</span>  
        </NavbarBrand>
        <Nav navbar className={bem.e('nav', 'mr-2')} role='navigation'>
          <NavItem>
              <NavLink href="/login/" className={bem.e('nav-link', 'border-left-0')}>Срочно</NavLink>
          </NavItem>
          <NavItem > 
              <NavLink href="/login/" className={bem.e('nav-link')}>Новости</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/logout/" className={bem.e('nav-link')}>Учреждения</NavLink>
          </NavItem>
          <NavItem>
                <NavLink href="/login/" className={bem.e('nav-link')}>Отчеты</NavLink>
          </NavItem>
        </Nav>

        <Nav navbar className={bem.e('nav-right')}>
        <NavItem>
              <NavLink href="/login/" className={bem.e('nav-link', 'border-left-0')}>Войти</NavLink>
          </NavItem>
          <NavItem > 
              <NavLink href="/register/" className={bem.e('nav-link')}>Зарегистрироваться</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
