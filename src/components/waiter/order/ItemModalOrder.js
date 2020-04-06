import React from 'react';


const ItemModalOrder = (props) => {
  return (
    <tr data-testid = "item-table-modal">
      <td data-testid = "item1">{props.value.quantity}</td>
      <td data-testid = "item2">{props.value.nameProduct}</td>
      <td data-testid = "item3">S/.{props.value.price}</td>
      <td data-testid = "item4">S/.{props.value.subTotal}</td>
    </tr>
  );
}


export default ItemModalOrder;
