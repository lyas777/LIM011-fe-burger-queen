import React from 'react';
import MenuTabs from './MenuTabs';
import MenuList from './MenuList';


const Menu = (props) => {
    const clickTabs = props.clickTabs;
    const products = props.products;
    const clickProduct = props.clickProduct;
    const offers = props.offers;
    const productOffer = props.productOffer;
    const clickOffer = props.clickOffer;

    return (
        <section className="p-2 flex-fill bd-highlight" data-testid="menu">
            <MenuTabs clickTabs = { clickTabs }/>
            <MenuList products = { products } clickProduct = { clickProduct } offers = { offers } clickOffer = { clickOffer } productOffer = { productOffer }/>
        </section>
    );
}


export default Menu;
