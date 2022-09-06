import { useState } from "react";
import {Title, ItemThumb, InfoThumb, ButtonsThumb} from './Item.styled';

const Item = ({name, size, color, price}) => { 

    return (
        <ItemThumb>
            <InfoThumb>
                <Title>{name}</Title>

                <p>Price:</p>
                <p>{price}$</p>

                <p>Size:</p>
                <p>{size}</p>

                <p>Color:</p>

                <div style={{backgroundColor: `${color}`, width: '20px', height: '20px'}}></div>
            </InfoThumb>

        </ItemThumb>
    )
}

export default Item;