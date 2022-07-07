import React from 'react';
import Navigation from './Navigation/Navigation';
import HeaderCurrency from './HeaderCurrency/HeaderCurrency';
import Cart from './Cart/Cart';
import styles from './Header.module.css';

const {header} = styles;

class Header extends React.Component {
    
    state = {
        shown: false,
    }

    toggleShown = () => {
        this.setState( prevState => ({
            shown: !prevState.shown,
        }))
    }

    render() {
    return (
        <div className={header}>
            <Navigation />
            <button>test</button>
            <HeaderCurrency/>
            <button type="button" onClick={this.toggleShown}>cart</button> 
            {this.state.shown && (
                <Cart />
            )}
        </div>
    );
    }
}

export default Header;