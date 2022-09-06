import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import shortid from "shortid";
import Item from "../Item/Item";
import { FlexThumb, Image, ButtonsThumb } from "./styledPages/Cart.styled";
import CartStats from "components/CartStats/CartStats";
import defaultImg from 'img/default.webp';
import { Container } from "./styledPages/Home.styled";
import { Title, List } from './styledPages/Cart.styled';

const Cart = () => {

    const {items} = useSelector(state => state.cart)

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const onDecrement = (e) => {
        console.dir(e.target);
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    }         
    
    const getTotalPrice = (items) => {
        return items.reduce((acc, el) => { return acc += el.price }, 0)
    }

    useEffect(() => {
        setTotal(getTotalPrice(items));

    }, [items])
console.log(total)
    return (
        <Container>
            <Title>Cart</Title>

            <List>
            {items && (items.map(({name, img, size, color, price}) => (
                <FlexThumb key={shortid.generate()}>                    
                    
                    <Item name={name} size={size} color={color} price={price} />
                    <ButtonsThumb>
                        <button type="button" onClick={() => setCount(count + 1)}>+</button>
                        <p>{count}</p>
                        <button type="button" onClick={onDecrement}>-</button>
                     </ButtonsThumb>
                    <Image src={img ? img : defaultImg} alt={name} />
                </FlexThumb>))
            )}
            </List>

            <CartStats count={count} totalPrice={total} />

        </Container>
    )
}

export default Cart;