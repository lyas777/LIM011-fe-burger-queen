import React from 'react';


const ItemOffer = (props) => {
  const clickOffer = props.clickOffer;
  const productOffer = props.productOffer;
  const valueOffer = props.value;

  return (
    <li>
      <button data-testid = "button" className="btn btn-outline-dark" onClick={ () => clickOffer(productOffer, valueOffer) }>
      {valueOffer.nameOffer} S/. {valueOffer.price}
      </button>
    </li>
  );
}


export default ItemOffer;
