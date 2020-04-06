import React from 'react';
import { render } from '@testing-library/react';
import Menu from '../../../components/waiter/menu/Menu';


it('Debería retornar el componente Menu como un valor verdadero de acuerdo al id proporcionado.', () => {
    const { getByTestId } = render(<Menu/>);
    const component = getByTestId('menu');
    
    expect(component).toBeTruthy();
});
