import { Suspense, useState } from 'react';
import {NavLink, useLocation, useNavigate, Outlet} from 'react-router-dom';
import shortid from 'shortid';
import Modal from '../Modal/Modal';
import Cart from './Cart';
import { 
    StyledList, 
    NavItem, 
    StyledNavLink, 
    Button, 
    Svg, 
    Header, 
    Navigation,
    Container,
    Body,
    Select} from './styledPages/Home.styled';

const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [modalShown, setModalShown] = useState(false);

    const onCartClick = () => {
        
        setModalShown(!modalShown);
    }

    const handleModal = (res) => {
        setModalShown(res);
    }

    const handleClose = (res) => {
        setModalShown(res);
    }

    return(
        <Container  className={modalShown && 'nonActive'}>
            <Header>
                <Navigation>
                    <StyledList>
                        <NavItem key={shortid.generate()}>
                            <StyledNavLink to='products/women'  state={{from: location}}>women</StyledNavLink>
                        </NavItem>
                        <NavItem key={shortid.generate()}>
                            <StyledNavLink to='products/men'  state={{from: location}}>men</StyledNavLink>
                        </NavItem>
                        <NavItem key={shortid.generate()}>
                            <StyledNavLink to='products/kids'  state={{from: location}}>kids</StyledNavLink>
                        </NavItem>
                    </StyledList>
                </Navigation>

                <Select name="currency" id="currency">
                    <option value="EUR">€</option>
                    <option value="USD">$</option>
                    <option value="UAH">₴</option>
                </Select>
                <Button type="button" onClick={onCartClick}>
                    <Svg width={25} height={25}>
                        <use href='img/cart.svg#icon-cart'></use>
                    </Svg>
                </Button>
            </Header>

            <Body>
                {modalShown && 
                <Modal onModal={handleModal} onEscape={handleClose} children={<Cart/>}/>}
                <Suspense fallback={<p>Loading... Please wait</p>}>
                    <Outlet/>
                </Suspense>
            </Body>
        </Container>
    )
}

export default Home;