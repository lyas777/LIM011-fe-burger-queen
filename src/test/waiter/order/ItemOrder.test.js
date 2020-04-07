import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ItemOrder from '../../../components/waiter/order/ItemOrder';


afterEach(cleanup);


const order = {
  nameProduct: 'Café',
  price: 5,
  quantity: 1,
  subTotal: 5,
};


it('Debería retornar el componente ItemOrder como un valor verdadero de acuerdo al id proporcionado.', () => {
  const { getByTestId } = render(<table><tbody><ItemOrder value={order} key={1}/></tbody></table>);
  const component = getByTestId('item-table-order');

  expect(component).toBeTruthy();
});

it('Debería ejecutar el evento onClick del elemento button "+".', () => {
  const clickButtonAdd = jest.fn();

  const { getByTestId } = render(<table><tbody><ItemOrder value = {order} clickButtonAdd = {clickButtonAdd}/></tbody></table>)


  fireEvent.click(getByTestId('button1'));

  expect(clickButtonAdd).toHaveBeenCalled();
});

it('Debería ejecutar el evento onClick del elemento button "-".', () => {
  const clickButtonSubtrack = jest.fn();

  const { getByTestId } = render(<table><tbody><ItemOrder value = {order} clickButtonSubtrack = {clickButtonSubtrack}/></tbody></table>)


  fireEvent.click(getByTestId('button2'));

  expect(clickButtonSubtrack).toHaveBeenCalled();
});

it('Debería ejecutar el evento onClick del elemento button "Eliminar".', () => {
  const clickButtonDelete = jest.fn();

  const { getByTestId } = render(<table><tbody><ItemOrder value = {order} clickButtonDelete = {clickButtonDelete}/></tbody></table>)


  fireEvent.click(getByTestId('button3'));

  expect(clickButtonDelete).toHaveBeenCalled();
});
