import React from 'react';
import ItemMenu from './ItemMenu';
import OfferList from './OfferList';


const MenuList = (props) => {
  const products = props.products;
  const clickProduct = props.clickProduct;
  const offers = props.offers;
  const clickOffer = props.clickOffer;
  console.log(offers);

  const listOrder = products.map((order) =>
  <ItemMenu key = { order.id } value = { order } clickProduct = { clickProduct }/>
  );

  return (
    <div>
      <div>
        <ul id="item-list">
          {listOrder}
        </ul>
      </div>
        {
          (offers.length > 0) && <OfferList offers = { offers } clickOffer = { clickOffer }/>
        }
    </div>
  );
}


export default MenuList;
