import React from "react";
import RC from "../assets/RC.svg"
import * as S from "../styles/styledHeader"

function Header() {
  return (
    <S.Header>
      <S.Background>
        <S.DivNav>
          <img src={RC} alt="logo" />
          <S.Nav>
            <S.UlNav>
              <li>ABOUT</li>
              <li>RECIPES</li>              
            </S.UlNav>
            <S.Btn>SUBSCRIBE</S.Btn>
          </S.Nav>
        </S.DivNav>
        <S.H1>RECIPES</S.H1>


      </S.Background>
    </S.Header>

  );
}

export default Header;
