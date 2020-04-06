import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemMenu from '../../../components/waiter/menu/ItemMenu';


const product = {
  nameProduct: 'Café',
  price: 5,
};


// toHaveTextContent(): Permite verificar si el elemento dado tiene un contenido de texto o no.


it('Deberia renderizar el componente botón con los datos de nombre y precio del producto.', () => {
  const { getByTestId } = render(<ItemMenu value={product} />);

  expect(getByTestId('button')).toHaveTextContent('Café S/. 5');
});


it('Deberia ejecutarse el evento onClick del elemento button.', () => {
  const clickProduct = jest.fn();

  const { getByTestId } = render(<ItemMenu value={product} clickProduct={clickProduct} />);

  fireEvent.click(getByTestId('button'));

  expect(clickProduct).toHaveBeenCalled();
});
