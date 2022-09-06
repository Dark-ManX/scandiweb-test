import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { Outlet, useNavigate } from "react-router-dom";
import shortid from "shortid";
import { Backdrop, ModalContainer } from "./Modal.styled";

const modalRoot = document.querySelector('#modal');

const Modal = ({onModal, onEscape}) => {

    const {items} = useSelector(state => state.cart);
    console.log(items);
    const navigate = useNavigate();
    const [modalShown, setModalShown] = useState(false);

    const onBag = () => {
        
        setModalShown(false);
        onModal(modalShown);
        navigate('cart');
    }

    useEffect(() => {
        
        const handleKeyDown = e => {
        
            if (e.code === 'Escape') {
            onEscape(false);
        }
    }

        window.addEventListener('keydown', handleKeyDown);

}, [modalShown]);

    return createPortal(
        <Backdrop>
            <ModalContainer>
                <p>My bag</p>
                <ul>
                    {items && (items.map(({name, price, img}) =>
                        <li key={shortid.generate()}>
                            <div>
                                <p>{ name }</p>
                                <p>{ price }$</p>
                            </div>
                            <img src={img} alt={name} />
                            <hr/>
                        </li>))}
                </ul>
                <p>Total: {items.reduce((acc, item) => { return acc += item.price }, 0)}$</p>
                <button type="button" onClick={onBag}>View bag</button>
                <button type="button">Check out</button>
            </ModalContainer>
        </Backdrop>, modalRoot
    )
}

export default Modal;