import React from 'react';
import ItemMenu from './ItemMenu';


const MenuList = (props) => {
  const products = props.products;
  const clickProduct = props.clickProduct;

  const listOrder = products.map((order) => <ItemMenu key={order.id} value={order} click={clickProduct} />);

  return (
    <div className="container">
      <h1>Menú</h1>
      <div>
        <ul id="item-list">
          {listOrder}
        </ul>
      </div>
    </div>
  );
}


export default MenuList;
