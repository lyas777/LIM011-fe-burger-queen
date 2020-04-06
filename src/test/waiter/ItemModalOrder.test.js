import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ItemModalOrder from '../../components/waiter/order/ItemModalOrder';


afterEach(cleanup);


const order = {
  nameProduct: 'Café',
  price: 5,
  quantity: 1,
  subtotal: 5,
};


it('Deberia renderizar el componente botón con los datos de nombre y precio de la oferta.', () => {
  const { getByTestId } = render(<ItemModalOrder value={order} />);

  expect(getByTestId('button')).toHaveTextContent('Queso S/. 1');
});


/* it('Deberia ejecutarse el evento onClick del elemento button.', () => {
  const clickOffer = jest.fn();

  const { getByTestId } = render(<ItemModalOrder value={order} clickOffer={clickOffer} />);

  fireEvent.click(getByTestId('button'));

  expect(clickOffer).toHaveBeenCalled();
}); */

