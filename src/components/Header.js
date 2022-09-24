import React from "react";
import RC from "../assets/RC.svg"
import * as S from "../styles/styledHeader"

function Header() {
  return (
    <S.Header>
      <S.Background>
        <S.DivNav>
          <S.Img src={RC} alt="logo" />
          <S.Nav>
            <S.UlNav>
              <li>ABOUT</li>
              <li>RECIPES</li>              
            </S.UlNav>
            <S.Btn>SUBSCRIBE</S.Btn>
          </S.Nav>
          <S.DivHamburguer>
            <div></div>
            <div></div>
          </S.DivHamburguer>
        </S.DivNav>
        <S.H1>RECIPES</S.H1>


      </S.Background>
    </S.Header>

  );
}

export default Header;
