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

export const SectionAbout = styled.section `
display: flex;

@media(max-width:1160px ){
    flex-direction: column;
    
}

`
export const DivImgAbout = styled.div`
width: 50%;
height: 957px;
background-image: url('https://raw.githubusercontent.com/RobsonLima2/Recipes/main/src/assets/pexels-karolina-grabowska-4199094.png');
background-position: center;

@media(max-width:1160px ){
    width: 100%;
    
}

@media(max-width:515px ){
    height: 413px;
    background-size: cover;
    background-repeat: no-repeat;
    
}

`

export const DivTextAbout = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 957px;

@media(max-width:1160px ){
    width: 100%;

    
}
`
export const PTextAbout = styled.p `
width: 576px;
text-align: justify;
font-size: 20px;
line-height: 35px;

@media(max-width:1160px ){
    width: 700px;
    
}

@media(max-width:720px ){
   width: 500px;
    
}

@media(max-width:520px ){
   width: 330px;
   font-size:16px ;
}


`
export const DivAbout = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 94.5px;
`

export const LinhaAbout = styled.div `

        border-bottom: 5px solid black;       
        width:80px;
        height: 8px;
        text-align: center;
        margin-top: 15px;        

`

export const H2About = styled.h2 `
font-size:40px;
`

export const SectionSubs = styled.section `
background-color: #DFE4DE;
height: 764px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const H2Subs = styled.h2 `
font-size: 40px;
letter-spacing: 4px;
font-weight: 500;
margin-bottom: 13px;

@media(max-width:410px ){
   
   font-size: 30px;
    
}
`

export const PSubs = styled.p `
font-size: 32px;
letter-spacing: 4px;
font-weight: 400;
margin-bottom: 42px;

@media(max-width:410px ){
   
   font-size: 20px;
    
}
`

export const InputSubs = styled.input `
width: 792px;
height: 120px;
background-color: #EFF1EE;
border: none;
padding-left: 50px;
font-size: 24px;
margin-bottom: 40px;

@media(max-width:800px ){
   width: 382px;
   height: 74px;
   padding-left: 37px;
   font-size: 20px;
    
}

@media(max-width:410px ){
   
    width: 330px;
    
}


`
export const BtnSubs = styled.button`
width: 240px;
height: 81px;
background-color: transparent;
border: 5px solid #373737;
font-size: 26px;
letter-spacing: 6px;

@media(max-width:800px ){
   width: 382px;
   height: 74px;
   font-size: 24px;
}

@media(max-width:410px ){
   
   width: 330px;
   
}

`