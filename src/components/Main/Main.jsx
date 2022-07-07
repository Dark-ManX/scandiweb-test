import RenderListItem from "./RenderListItem";
// import data from '../../data/data.json';

const Main = ({data}) => {
    return (
        <ul>
            {data.map(({id, img, name, price, amount})=>{
                return (<RenderListItem 
                    key={id}
                    img={img} 
                    name={name} 
                    price={price} 
                    amount={amount} 
                />)
            })}
        </ul>
    )
}

export default Main;