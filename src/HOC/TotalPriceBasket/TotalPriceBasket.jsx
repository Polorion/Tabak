import * as React from 'react';
import {useSelector} from "react-redux";

const TotalPriceBasket = (Component) => {

    const NewComponent=(props)=>{
    const activeBasket=useSelector(state=>state.basket.basket.basketActive)

    const getTotalPrice=()=>{
        return activeBasket&&activeBasket.reduce((acc,item)=>{
            return acc+(item.count*item.price)
        },0)
    }
        return <Component {...props} totalPrice={getTotalPrice()} />
    }

    return (
        NewComponent
    );
};

export default TotalPriceBasket