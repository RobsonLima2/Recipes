import React from "react";
import instagram from "../assets/Instagram Ellipse.svg";
import twitter from "../assets/Twitter ellipse.svg";
import facebook from "../assets/Facebook Ellipse.svg";
import pinterest from "../assets/Pinterest Ellipse.svg";
import * as S from '../styles/styledFooter'
const Footer = () => {
  return (
    <footer>
      <S.DivRedes>
        <S.DivImgRedes>
          <S.ImgRedes src={instagram} alt="Icon instagram" />
          <S.ImgRedes src={twitter} alt="Icon twitter" />
          <S.ImgRedes src={facebook} alt="Icon facebook" />
          <S.ImgRedes src={pinterest} alt="Icon pinterest" />
        </S.DivImgRedes>
        <S.NavRedes>
          <S.UlNavRedes>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
          </S.UlNavRedes>
        </S.NavRedes>
      </S.DivRedes>
      <S.DivCopyright>
        <p>
          Layout produzido por Vai na Web para fins exclusivamente educacionais.
          Referência:
          https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
        </p>
      </S.DivCopyright>
    </footer>
  );
};

export default Footer;
