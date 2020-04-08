import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Waiter from '../../components/waiter/Waiter';
import db from '../../firebase/controller';

//import itemOrder from '../../components/waiter/order/ItemOrder'

// import firestore from '../../__mocks__/firebase';
// import products from '../../__mocks__/dataBase/products';
// import orders from '../../__mocks__/dataBase/orders';
// import offers from '../../__mocks__/dataBase/offers';
// import { getProducts } from '../../firebase/firestore';

//global.firebase = new MockFirebase(products, { isNaiveSnapshotListenerEnabled: true });
console.log(db);

it('prueba firestore', (done)=>{
  db.firestore.collection('products').add({
    category: 'breakfast',
    nameProduct: 'Sandwich de jamón y queso',
    offer: false,
    price: 10,
    type: null,
  }).then((doc) => {console.log(doc.data()); done()});

});

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

it('"clickTabs" debería leer la data de los productos según la categoría seleccionada', () =>{

  const clickTabs = jest.fn();
  const component = renderer.create(<Waiter clickTabs={clickTabs}/>).getInstance();
  const sideDish = component.getByTestId('sideDish');
  const products = [
    {
      category: 'sideDish',
      nameProduct: 'Aros de cebolla',
      offer: false,
      price: 5,
      type: null,
    },
    {
      category: 'sideDish',
      nameProduct: 'Papas fritas',
      offer: false,
      price: 5,
      type: null,
    }
  ]
  act(() => {
    fireEvent.click(sideDish);
  })

  expect(component.state.products).toBe(products);

});

it('"ClickOffer" debería cambiar el estado de offers, orders y total.', () => {
  const component = renderer.create(<Waiter/>).getInstance();

  const productoffer = {
    id: 'prod01',
    nameProduct: 'Hamburguesa de Pollo',
    price: 10,
    quantity: 1,
  };
  const offer = {
      id: 'offer01',
      nameOffer: 'Huevo',
      price: 1,
    };
  const orders = [{
    id: 'prod01offer01',
    nameProduct: 'Hamburguesa de Pollo '+ '+'+' Huevo',
    price: 11,
    quantity: 1,
    subTotal: 11,
  }];

  component.clickOffer(productoffer,offer);

  expect(component.state.orders).toStrictEqual(orders);
  expect(component.state.total).toBe(11);
  act(() => {
    const itemOrder = render(<itemOrder />)
  })
  expect(component).toBeTruthy();
  expect(component.state.offers).toStrictEqual([]);

});

