import shortid from 'shortid';
import { Link, useLocation } from 'react-router-dom';
import data from '../../data/data.json';
import { Thumb, Unavailable, StyledLi, Alert } from './styledPages/Gallery.styled';
import ProductCard from './ProductCard';

const Gallery = () => {

    const location = useLocation();

    const handleClick = text => console.log(text)

    return (
        <div>
            <p>Category name</p>
            <Thumb>
                {data.map(({ id, name, price, img, quantity }) => (
                    // console.log(price)))};
                    <StyledLi key={shortid.generate()}>
                        <Link to={`products/${id}`} state={{ from: location }} onClick={() => handleClick(id)}>
                            <img src={img} alt={name} />
                            <p>{name}</p>
                            <p>${price}</p>
                            {!quantity && (<Unavailable>
                                <Alert>Out of stock</Alert>
                            </Unavailable>)}
                        </Link>
                    </StyledLi>
                ))}
            </Thumb>
        </div>
    )
}

export default Gallery;