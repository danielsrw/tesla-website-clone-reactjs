import React, { useState } from 'react'
import styled from 'styled-components'
// import { selectCars } from '../features/car/CarSlice'
// import { useSelector } from 'react-redux'
// import MenuIcon from '@mui/icons-material/Menu'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' />
            </a>
            <Menu>
                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <a href='#' onClick={() => setBurgerStatus(true)}>Menu</a>
                {/*<CustomMenu />*/}
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloserWrapper>
                    <p onClick={() => setBurgerStatus(false)}>Close</p>
                </CloserWrapper>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Powelwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Invest Relations</a></li>
            </BurgerNav>
        </Container>
    );
}

export default Header

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 700;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        font-size: 13px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div `
    display: flex;
    align-items: center;

    a {
        font-weight: 700;
        text-transform: uppercase;
        padding: 0 15px;
        font-size: 13px;
    }
`

const CustomMenu = styled.div `
    cursor: pointer;
`

const BurgerNav = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    padding: 20px 0 0 40px;
    list-style: none;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.3s ease-in-ease-out;

    li {
        font-size: 14px;
        font-weight: 800;
        margin-bottom: 18px;
    }
`

const CloserWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
    padding: 0 30px 0 0;
    p {
        color: red;
        font-weight: 800;
        padding: 0 0 15px 0;
        cursor: pointer;
    }
`