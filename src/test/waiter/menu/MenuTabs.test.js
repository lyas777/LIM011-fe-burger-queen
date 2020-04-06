import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MenuTabs from '../../../components/waiter/menu/MenuTabs';


afterEach(cleanup);


// jest.fn(implementation): Devuelve una nueva función simulada no utilizada. 
// Opcionalmente toma una implementación simulada.


it('Debería retornar el componente MenuTabs como un valor verdadero de acuerdo al id proporcionado.', () => {
  const clickTabs = jest.fn;

  const { getByTestId } = render(<MenuTabs clickTabs={ clickTabs } />);

  const component = getByTestId('menu-tabs');

  expect(component).toBeTruthy();
});


// fireEvent[eventName](node: HTMLElement, eventProperties: Object): Ejecuta un evento 
// del DOM. Establece propiedades determinadas del evento.

// toHaveBeenCalled(): Permite asegurar de que se llamó a una función simulada.


it('Debería ejecutarse la función clickTabs al dar click al botón Desayuno.', () => {
  const clickTabs = jest.fn();

  const { getByTestId } = render(<MenuTabs clickTabs = { clickTabs }/>);

  fireEvent.click(getByTestId('breakfast'));

  expect(clickTabs).toHaveBeenCalled();
});


it('Debería ejecutarse la función clickTabs al dar click al botón Hamburguesas.', () => {
  const clickTabs = jest.fn();

  const { getByTestId } = render(<MenuTabs clickTabs={clickTabs}/>);
  
  fireEvent.click(getByTestId('burger'));

  expect(clickTabs).toHaveBeenCalled();
});


it('Debería ejecutarse la función clickTabs al dar click al botón Acompañamiento.', () => {
  const clickTabs = jest.fn();

  const { getByTestId } = render(<MenuTabs clickTabs = { clickTabs }/>);

  fireEvent.click(getByTestId('sideDish'));

  expect(clickTabs).toHaveBeenCalled();
});


it('Debería ejecutarse la función clickTabs al dar click al botón Bebidas.', () => {
  const clickTabs = jest.fn();

  const { getByTestId } = render(<MenuTabs clickTabs = { clickTabs }/>);

  fireEvent.click(getByTestId('drinks'));

  expect(clickTabs).toHaveBeenCalled();
});
