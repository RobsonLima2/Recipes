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
    </main>
  );
};

export default Main;
