import styled from 'styled-components'

export const DivRedes = styled.div `
    height: 399px;
    background-color: #F2F4F1;
    display: flex;
    justify-content: space-between;
    padding: 0px 88px;
    align-items: center;
    @media(max-width: 1000px) {
        padding: 0px 15px;
    }

    @media(max-width: 760px) {
        padding: none;
        flex-direction: column;
        justify-content: center;
    }
`

export const DivImgRedes = styled.div `
    @media(max-width: 760px) {
        order: 1;
    }
`

export const ImgRedes = styled.img `
    width: 57px;
    height: 57px;
    margin-right: 16px;

`

export const NavRedes = styled.nav`
display: flex;
width: 420px;
justify-content: space-evenly;
align-items: center;

@media(max-width: 760px) {
        order: 0;
        width: 142px;
        height: 186px;
        margin-bottom: 64px;
    }

`

export const UlNavRedes = styled.ul`
width: 546px;
display: flex;
justify-content: space-evenly;

    li{
    font-size: 24px;

    }

    @media(max-width: 760px) {
        flex-direction: column;
        width: 142px;
        height: 186px;
        align-items: center;
    }
`

export const DivCopyright = styled.div `
    background-color: #446061;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
     p {
        color: white;
        text-align: center;
     }

    @media(max-width: 760px) {
        p {
            font-size: 9px;
        }
    }

    @media(max-width: 760px) {
        p {
            font-size: 7px;
            
        }
    }

`