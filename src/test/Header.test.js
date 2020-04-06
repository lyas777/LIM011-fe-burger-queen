import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../components/Header';


// toBeTruthy(): Asegura que el valor retornado sea true o un objeto verdadero.
// En JavaScript, hay seis valores Falsy: false, 0, '', null, undefined, y NaN. 
// Todo lo demás es Truthy.

afterEach(cleanup);


it('Debería retornar el componente Header como un valor verdadero de acuerdo al id proporcionado.', () => {
  const { getByTestId } = render(<Header/>);
  const component = getByTestId('header');
  
  expect(component).toBeTruthy();
});
