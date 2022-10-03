import * as React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    const countItem = props.basketActive.length
    return (
        <Header countItem={countItem}/>
    );
};

const mapDispatchToProps=(state)=>{
    return {
        basketActive: state.basket.basket.basketActive,
    }
}
export default connect(mapDispatchToProps,{}) (HeaderContainer)