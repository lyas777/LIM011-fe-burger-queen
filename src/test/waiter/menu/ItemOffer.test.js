import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemOffer from '../../../components/waiter/menu/ItemOffer';


const offer = {
  nameOffer: 'Queso',
  price: 1,
};


it('Deberia renderizar el componente botón con los datos de nombre y precio de la oferta.', () => {
  const { getByTestId } = render(<ItemOffer value={offer} />);

  expect(getByTestId('button')).toHaveTextContent('Queso S/. 1');
});


it('Deberia ejecutarse el evento onClick del elemento button.', () => {
  const clickOffer = jest.fn();

  const { getByTestId } = render(<ItemOffer value={offer} clickOffer={clickOffer} />);

  fireEvent.click(getByTestId('button'));

  expect(clickOffer).toHaveBeenCalled();
});
