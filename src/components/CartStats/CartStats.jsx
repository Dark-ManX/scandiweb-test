import { Button } from '@mui/material';

const CartStats = ({totalPrice, count}) => {

    return (
        <div>

            <div>
                <p>Tax 21%:</p>
                <p>{ (totalPrice * count * 0.21).toFixed(2) }$</p>
                <p>Quantity</p>
                <p>{ count }</p>
                <p>Total</p>
                <p>{ (totalPrice * count) }</p>
            </div>
            <Button variant="contained" color="success" type="submit">Order</Button>

        </div>
    )
}

export default CartStats;