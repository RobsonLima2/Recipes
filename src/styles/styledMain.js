import styled from 'styled-components'

export const SectionRecipes = styled.section `
    width: 100%;
    background-color: #F2F4F1;
    padding: 0px 98px;
    padding-top: 245px;
`

export const Container = styled.div `
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const DivTexto = styled.div `
    width: 327px;
    height: 81px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

        div{
        border-bottom: 5px solid black;       
        width:80px;
        height: 8px;
        text-align: center;
        margin-top: 15px;
        }
`

export const H2 = styled.h2 `
    width: 200px;
    text-align: center;
    
`



export const ContainerCards = styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 80px;
    width: 1200px;
    margin-bottom: 294px;

    @media(max-width: 1250px) {
        width: 1000px;
    }

    @media(max-width: 1020px) {
        width: 700px;
    }

    @media(max-width: 720px) {
        width: 350px;
    }
`

export const Card = styled.div `
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 15px;

    @media(max-width: 1020px) {
        margin-right: 15px;
    }
`

export const ImgCard = styled.img `
    width: 335px;
    height: 250px;
    @media(max-width: 1250px) {
        width: 300px;
        height: 200px;
    }

`

export const ContainerH4 = styled.div `
    width: 335px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 1250px) {
        width: 300px;
        height: 200px;
    }
`

export const Linha = styled.div `
        background-color: black;
        width: 40px;
        height: 6px;
        text-align: center;
        margin-top: 15px;
        border-radius: 10px;
        margin-bottom: 34.5px;
`