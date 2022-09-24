import styled from 'styled-components'

export const Header = styled.header`
padding: 36px 34px;
margin: auto;
width: 100%;

@media(max-width:500px){
    padding:0px;
}


`
export const Background = styled.section`
background-image: url('https://raw.githubusercontent.com/Luizgsmkw/Recipes/main/src/assets/Grupo%20de%20m%C3%A1scara%202.png');
background-size: contain;
background-repeat: no-repeat;
height: 900px;
margin: auto;

@media(max-width:500px){
    background-image:url('https://raw.githubusercontent.com/RobsonLima2/Recipes/main/src/assets/pexels-rachel-claire-4846295.png') ;
    width: 100%;
    background-size:cover ;
}

`

export const DivNav = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 55px 63px;

@media(max-width:850px){
    padding: 20px 20px;
    justify-content: flex-end;
}



`


export const Nav = styled.nav`
display: flex;
width: 420px;
justify-content: space-evenly;
align-items: center;

@media(max-width:850px) {
    display: none;
}


`

export const UlNav = styled.ul`
width: 300px;
display: flex;
justify-content: space-evenly;

    li{
        font-size: 16px;
letter-spacing: 4px;
    }
`


export const Btn = styled.button`
width: 200px;
height: 51px;
background-color: transparent;
border: 3px solid #373737;
font-size: 16px;
letter-spacing: 4px;

`

export const H1 = styled.h1`
font-size: 100px;
color: #373737;
letter-spacing: 6px;
position: absolute;
top: 85vh;
left: 433px;
width: 450px;
text-align: center;

@media(max-width:1060px){
    width: 200px;
    font-size: 50px;
    top: 55vh;
    left: 215px;
}

@media(max-width:740px){
    top: 158px;
    left: 100px;
}

`

export const DivHamburguer = styled.div `
display: none;
height:68px;

    div{
        border-bottom: 3px solid black;       
        width:20px;
        height: 8px;
        
    }

@media(max-width:850px){
    display: flex;
    flex-direction: column;
}

`

export const Img = styled.img`

@media(max-width:1060px){
   display: none;
}



`