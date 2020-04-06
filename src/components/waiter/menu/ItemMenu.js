import React from 'react';


const ItemMenu = (props) => {
  const clickProduct = props.clickProduct;
  const nameProduct = props.value.nameProduct;
  const price = props.value.price;

  return (
    <li>
      <button data-testid="button" className="btn btn-outline-dark" onClick={() => clickProduct(props.value)}>
      { nameProduct } S/. { price }
      </button>
    </li>
  );
}


export default ItemMenu;
