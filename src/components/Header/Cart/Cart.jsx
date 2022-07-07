import { render } from '@testing-library/react';
import React, { Component } from 'react';
import styles from './Cart.module.css';

const {overlay, modal} = styles;

class Cart extends Component {
    state = {
        name: this.name,
        price: this.price,
    }
    // ({name, price}) => {

    render() {
    return (
        <div className={overlay}>
            <div className={modal}>
                <p>My bag</p>
                <p>name</p>
                <span>{this.price}$</span>
                <label htmlFor="">
                    <input type="radio" name="color"/>
                    <input type="radio" name="color"/>
                    <input type="radio" name="color"/>
                </label>
                <label htmlFor="">
                    <input type="radio" />
                </label>
            </div>
        </div>
    )}
}

export default Cart;