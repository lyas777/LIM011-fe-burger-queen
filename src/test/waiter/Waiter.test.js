import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Waiter from '../../components/waiter/Waiter';


it('Debería retornar el componente Waiter como un valor verdadero de acuerdo al id proporcionado.', () => {
  const { getByTestId } = render(<Waiter />);
  const component = getByTestId('waiter');

  expect(component).toBeTruthy();
});


/* it('Debería ejecutarse la función clickTabs al dar click al botón Desayuno.', () => {
  const component = renderer.create(<Waiter/>).getInstance();

  component.clickTabs('sideDish');

  expect(component.state.products).toStrictEqual([{ nameProduct: 'Aros de cebolla'}]);
}); */


// toBe(value): Comprueba el valor esperado. Utiliza === para la comprobarla igualdad 
// estricta.


it('Debería cerrarse el modal al dar click al botón superior "x".', () => {
  const component = renderer.create(<Waiter/>).getInstance();

  component.handleCloseModal();

  expect(component.state.show).toBe(false);
});


it('No debería mostrar el modal cuando la lista de órdenes se encuentre vacía.', () => {
  const component = renderer.create(<Waiter/>).getInstance();

  component.clickSend();

  expect(component.state.show).toBe(false);
});
