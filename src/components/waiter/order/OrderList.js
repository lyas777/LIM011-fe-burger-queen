import React from 'react';
import ItemOrder from './ItemOrder';


class OrderList extends React.Component {

  render() {
    const arrayOrder = this.props.orderProduct;
    const clickButtonAdd = this.props.clickButtonAdd;
    const clickButtonSubtrack = this.props.clickButtonSubtrack;
    const clickButtonDelete = this.props.clickButtonDelete;
    const totalPay = this.props.totalPay;
    const clickSend = this.props.clickSend;

    return (
      <section className="p-2 flex-fill bd-highlight">
        <div className="container">
          <h1>Registro de Pedidos</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope='col'>Cantidad</th>
                  <th scope='col'>Producto</th>
                  <th scope='col'>Precio</th>
                  <th scope='col'>Sub Total</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {
                  arrayOrder.map((order) => <ItemOrder key={order.id} value={order} clickButtonAdd={clickButtonAdd}  clickButtonSubtrack = { clickButtonSubtrack } clickButtonDelete = {clickButtonDelete}/>)
                }
              </tbody>
            </table>
            <div>
              <h2>Total S/. {totalPay}</h2>
              <button className="btn btn-info" onClick = {() => clickSend()} ><h5>Enviar</h5></button>
            </div>
        </div>
      </section>
    );
  }
}


export default OrderList;

