import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  NavBtnLink,
  StyledInput
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
          <NavLink to='/forecastModels' activeStyle>
            Modelos de previsão 
          </NavLink>
          <NavLink to='/correlationAlgorithm' activeStyle>
            Algoritmo de correlação 
          </NavLink>
      </Nav>

      <NavBtn style={{ display: 'flex',justifyContent: 'right', height: '15vh'}}>
          <NavBtnLink to='/modelCreate'>Criar modelo</NavBtnLink>
        </NavBtn>

        <form> 
            <label style={{  justifyContent: 'center', height: '2vh'}}>
              <input type="text" placeholder="Pesquisar Modelos" name="Search" />
            </label>
            <input type="submit" value=" Pesquisar" />
        </form>


    </>
  );
};

export default Navbar;
