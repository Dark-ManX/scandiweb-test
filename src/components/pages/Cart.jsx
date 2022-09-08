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

    const { items } = useSelector(state => state.cart);
    const quantity = items.map(el => el.count);
    console.log(quantity)

    const [arrOfCounts, setArrOfCounts] = useState(quantity);
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = () => {
        return items.reduce((acc, {price, count}) => { return acc += (price * count) }, 0);
    };

    const getTotalCount = () => {
        return quantity.reduce((acc, el) => { return acc += el }, 0);
    }

    useEffect(() => {
        setTotalPrice(getTotalPrice());
        setArrOfCounts(quantity);

    }, [items]);
    
        return (
            <Container>
                <Title>Cart</Title>

                <List>
                    {items && (items.map(el => {
                        const index = items.indexOf(el);

                        const onIncrement = () => {
                            console.log(el.count);
                            setArrOfCounts(quantity);
                            return (el.count = el.count + 1);
                        }

                        const onDecrement = () => {
                            if (el.count === 0) {
                                return;
                            }
                            el.count -= 1;
                            console.log(items)
                            setArrOfCounts(quantity)
                            console.log(arrOfCounts[index])
                        }

                        return (
                        <FlexThumb key={shortid.generate()}>
                    
                            <Item name={el.name} size={el.size} color={el.color} price={el.price} />
                            <ButtonsThumb>
                                <button type="button" onClick={onIncrement}>+</button>
                                <p>{arrOfCounts[index]}</p>
                                <button type="button" onClick={onDecrement}>-</button>
                            </ButtonsThumb>
                            <Image src={el.img ? el.img : defaultImg} alt={el.name} />
                            </FlexThumb>
                        )
                    }
                    ))}
                </List>

                <CartStats count={getTotalCount()} totalPrice={getTotalPrice()} />

            </Container>
        )
    }


export default Cart;