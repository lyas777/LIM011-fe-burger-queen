import React from 'react';
// import { unmountComponentAtNode } from "react-dom";
import { render } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';

import ItemModalOrder from '../../components/waiter/ItemModalOrder';

// let container = null;
// beforeEach(() => {
//   // configurar un elemento del DOM como objetivo del renderizado
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // limpieza al salir
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

it('Deberia mostrar datos de orden en la tabla', () => {
  const orderData = {
        quantity: 1,
        nameProduct: 'cafe',
        price: 5,
        subtotal: 5
      }
  const order = render(
    <div>
      <table>
      <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio c/u</th>
              <th>Sub Total</th>
            </tr>
          </thead>
      <tbody>
        <ItemModalOrder value={orderData}/>
      </tbody>
      </table>
    </div>);

});
