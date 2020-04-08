import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import OfferList from '../../../components/waiter/menu/OfferList';

const offer = [{nameProduct: 'Huevo', price: 1}, {nameProduct: 'Queso', price: 1}];


it('Debería retornar el componente OffserList como un valor verdadero de acuerdo al id proporcionado.', () => {

  const { getByTestId } = render(<OfferList offer = {offer} />);
  const component = getByTestId('item-list');

  expect(listOffers.find('article').lenght).toBe(2);
});

// it('Debería retornar el componente OffserList como un valor verdadero de acuerdo al id proporcionado.', () => {

//   const clickOffer = jest.fn();

//   const { getByTestId } = render(<OfferList clickOffer = { clickOffer } />);

//   fireEvent.click(getByTestId('button'));

//   expect(clickOffer).toHaveBeenCalled();
// });

