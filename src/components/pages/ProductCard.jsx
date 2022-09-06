import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import data from 'data/data.json';
import defaultImg from 'img/default.webp';
import { addItem } from 'redux/cart';
import { 
    ColorContainer, 
    ColorPickerGrey, 
    ColorPickerBlack, 
    ColorPickerGreen, 
    Label,
    Input,
    FlexThumb,
    Image,
    Form,
    Title,
    Subtitle,
    RadioSize,
    SizeInput,
    CardThumb
} from './styledPages/ProductCard.styled';
import { Button } from '@mui/material';

const ProductCard = () => {
    
    const [id, setId] = useState(null);
    const [size, setSize] = useState(null);
    const [color, setColor] = useState(null);
    // const [productPrice, setProductPrice] = useState(null);

    const dispatch = useDispatch();
    const { productId } = useParams();
    
    const getClickedProd = (productId) => {
        return data.filter(({ id }) => id === productId);
    }

    const [item] = getClickedProd(productId);
    const { name, price, img } = item;

    const onSelect = (e) => {

        const {value} = e.target;
    }
    const handleInput = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'size':
                setSize(value);
                break;
            case 'color':
                setColor(value);
                break;
            default:
                return;
        }

    }

    const addToCart = (e) => {
        const { children } = e.target;
        const [filtered] = [...children].filter(el => (el.className === 'title'));
        const [filterImg] = [...children].filter(el => (el.nodeName === 'IMG'));

        setId(productId);

        if (!id && !size && !color) {

            return alert('please choose all options');

            // console.log(item);
            //         setItem({...item, name: filtered.textContent, img: filterImg.src, size, color });
            //         setCart([...cart, item]);
            //         onAddToCart(cart);
            //         console.log(cart);
        }

        e.preventDefault();

        dispatch(addItem({ id: shortid.generate(), productId, name, img, size, color, price }))
    }

    // const [obj] = getClickedProd(productId);
    // const {img, name, price} = obj;

    return(

            <FlexThumb>
                
                <Form onSubmit={addToCart}>
                    <Image src={img} alt={name} />
                    <CardThumb>
                        <Title>{name}</Title>

                        <Subtitle>Size:</Subtitle>
                        
                        <SizeInput type="radio" name="size" id='xs' value='xs' onChange={handleInput}/>
                        <RadioSize htmlFor='xs'>XS</RadioSize>
                        <SizeInput type="radio" name="size" id='s' value='s' onChange={handleInput}/>
                        <RadioSize htmlFor='s'>S</RadioSize>
                        <SizeInput type="radio" name="size" id='m' value='m' onChange={handleInput}/>
                        <RadioSize htmlFor='m'>M</RadioSize>
                        <SizeInput type="radio" name="size" id='l' value='l' onChange={handleInput}/>
                        <RadioSize htmlFor='l'>L</RadioSize>

                        <Subtitle>Color:</Subtitle>

                            <Label>
                            <Input type="radio" name='color' id='grey' value='grey' onChange={handleInput}/>
                            <ColorPickerGrey></ColorPickerGrey>
                            </Label>

                            <Label>
                            <Input type="radio" name='color' id='black' value='black' onChange={handleInput}/>
                            <ColorPickerBlack></ColorPickerBlack></Label>
                        
                            <Label>
                            <Input type="radio" name='color' id='green' value='green' onChange={handleInput}/>
                            <ColorPickerGreen></ColorPickerGreen></Label>


                        <Subtitle>Price: { price }$</Subtitle>
                        {/* <p>{price}</p> */}

                        <Button variant="contained" color="success" type="submit">Add to cart</Button>
                    </CardThumb>
                </Form>
            </FlexThumb>
    )
}

export default ProductCard;
