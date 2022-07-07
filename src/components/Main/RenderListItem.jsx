

const RenderListItem = ({img, name, price, amount}) => {
    <li>
        <div>
            <img src={img} alt="" />
        </div>
        {!amount && (
            <div>
                <p>out of stock</p>
            </div>)}
        <p>{name}</p>
        <p>`${price}$`</p>
    </li>
}

export default RenderListItem;