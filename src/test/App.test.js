import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';


// afeterEach(): Función que se ejecuta después de cada prueba.
// cleanup: Se pasa como un parámetro a afterEach para simplemente 
// limpie todo, después de cada prueba para evitar pérdidas de memoria.


afterEach(cleanup);


// data-testid: Añade un "id" a cada elemento.
// getByTestId(): Permite seleccionar los elementos mediante el atributo 
// "data-testid".
// toBeInTheDocument(): Permite afirmar si un elemento está presente en el 
// documento o no.


it('El componente App se encuentra renderizado en el documento.', () => {
  const { getByTestId } = render(<App/>);
  const component = getByTestId('app');

  expect(component).toBeInTheDocument();
});
