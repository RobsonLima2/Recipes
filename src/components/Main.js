import React from "react";
import * as S from "../styles/styledMain";
import cake from '../assets/foodiesfeed.com_detail-of-pavlova-strawberry-piece-of-cake.png'
import pizza from '../assets/foodiesfeed.com_neapolitan-pizza-margherita.png'
import smoothie from '../assets/foodiesfeed.com_peanut-butter-and-banana-smoothie.png'

const Main = () => {

  return (
    <main>
      <S.SectionRecipes>
        <S.Container>
          <S.DivTexto>
            <S.H2>LATEST RECIPES</S.H2>
            <div></div>
          </S.DivTexto>
          <S.ContainerCards>
            <S.Card>
              <S.ImgCard src={cake} alt="Bolo Red Velvet" />
              <S.ContainerH4>
                <S.Linha></S.Linha>
                <h4>Red Velvet Cake</h4>
              </S.ContainerH4>
            </S.Card>
            <S.Card>
              <S.ImgCard src={pizza} alt="Pizza Margherita" />
              <S.ContainerH4>
                <S.Linha></S.Linha>
                <h4>Margherita Pizza</h4>
              </S.ContainerH4>
            </S.Card>
            <S.Card>
              <S.ImgCard src={smoothie} alt="Smoothie de banana" />
              <S.ContainerH4>
                <S.Linha></S.Linha>
                <h4>Peanut Smoothie</h4>
              </S.ContainerH4>
            </S.Card>
          </S.ContainerCards>
        </S.Container>
      </S.SectionRecipes>
      <S.SectionAbout>
        <S.DivImgAbout></S.DivImgAbout>
        <S.DivTextAbout>
          <S.DivAbout>
          <S.H2About>ABOUT</S.H2About>
          <S.LinhaAbout></S.LinhaAbout>
          </S.DivAbout>
          <S.PTextAbout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</S.PTextAbout>
        </S.DivTextAbout>

      </S.SectionAbout>
      <S.SectionSubs>
        <S.H2Subs>SUBSCRIBE</S.H2Subs>
        <S.PSubs>Sign up for newsletter</S.PSubs>
        <S.InputSubs type='email' placeholder="Your Email"/>
        <S.BtnSubs>SUBMIT</S.BtnSubs>
      </S.SectionSubs>
    </main>
  );
};

export default Main;
