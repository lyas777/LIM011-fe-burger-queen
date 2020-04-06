import React from 'react';
// import FontAwesome from 'react-fontawesome';


const ItemOrder = (props) => {
  return (
    <tr>
      <td>
        <button className="btn btn-outline-danger btn-sm" onClick = { () => props.clickButtonAdd(props.value)}>+</button>
        {props.value.quantity}
        <button className="btn btn-outline-danger btn-sm" onClick = { () => props.clickButtonSubtrack(props.value) }>-</button>
      </td>
      <td>{props.value.nameProduct}</td>
      <td>S/.{props.value.price}</td>

      <td>S/.{props.value.subTotal}</td>

      <td><button  className="btn btn-danger" onClick = { () => props.clickButtonDelete(props.value) }>Eliminar</button></td>
    </tr>
  );
}


export default ItemOrder;
