import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ItemModalOrder from '../../../components/waiter/order/ItemModalOrder';


afterEach(cleanup);


const order = {
  nameProduct: 'Café',
  price: 5,
  quantity: 1,
  subTotal: 5,
};


it('Debería retornar el componente ItemModalOrder como un valor verdadero de acuerdo al id proporcionado.', () => {
  const { getByTestId } = render(<table><tbody><ItemModalOrder value={order} key={1}/></tbody></table>);
  const component = getByTestId('item-table-modal');

  expect(component).toBeTruthy();
});


it('Deberia renderizar la cantidad de la orden.', () => {
  const { getByTestId } = render(<table><tbody><ItemModalOrder value={order} /></tbody></table>);

  expect(getByTestId('item1')).toHaveTextContent(1);
});


it('Deberia renderizar el nombre del producto ordenado.', () => {
  const { getByTestId } = render(<table><tbody><ItemModalOrder value={order} /></tbody></table>);

  expect(getByTestId('item2')).toHaveTextContent('Café');
});


it('Deberia renderizar el precio del producto.', () => {
  const { getByTestId } = render(<table><tbody><ItemModalOrder value={order} /></tbody></table>);

  expect(getByTestId('item3')).toHaveTextContent('S/.5');
});


it('Deberia renderizar el sub total de la orden.', () => {
  const { getByTestId } = render(<table><tbody><ItemModalOrder value={order} /></tbody></table>);

  expect(getByTestId('item4')).toHaveTextContent('S/.5');
});
