import styled from 'styled-components'

export const Header = styled.header`
padding: 36px 34px;
margin: auto;
width: 100%;
`
export const Background = styled.section`
background-image: url('https://raw.githubusercontent.com/Luizgsmkw/Recipes/main/src/assets/Grupo%20de%20m%C3%A1scara%202.png');
background-size: contain;
background-repeat: no-repeat;
height: 900px;
margin: auto;


`

export const DivNav = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 55px 63px;
`
export const Nav = styled.nav`
display: flex;
width: 420px;
justify-content: space-evenly;
align-items: center;
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
position: relative;
top: 35%;
left: 33%;

`