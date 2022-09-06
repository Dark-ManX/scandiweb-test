import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
max-width: 1240px;
margin: 0 auto;
padding: 0 100px;

& .nonActive {
    overflow: hidden;
}
`;

export const Header = styled.div`
display: flex;
align-content: center;
`;

export const Navigation = styled.nav`
margin-right: auto;
`;

export const StyledList = styled.ul`
display: flex;
`;

export const NavItem = styled.li`

&:not(:last-child){
    margin-right: 15px;
}`;

export const StyledNavLink = styled(NavLink)`
font-size: 20px;
text-decoration: none;

&.active {
    color: green;
}`;

export const Button = styled.button`
position: relative;
width: 25px;
height: 15px
`;

export const Svg = styled.svg`
width: 15px;
height: 15px;
position: absolute;
top: 0;
left: 0;
fill: black;
`;

export const Body = styled.div`
position: relative;
`;

export const Select = styled.select`
border: none;`