import React from 'react';
import WaiterData from './WaiterData';
import OrderList from './OrderList';


class RegisterOrder extends React.Component {

  render() {
    const orderProduct = this.props.orderProduct;
    const clickButtonAdd = this.props.clickButtonAdd;
    const clickButtonSubtrack = this.props.clickButtonSubtrack;
    const clickButtonDelete = this.props.clickButtonDelete;
    const totalPay = this.props.totalPay;
    const clickSend = this.props.clickSend;

    return (
      <section>
        <WaiterData />
        <OrderList orderProduct={orderProduct} clickButtonAdd={clickButtonAdd} clickButtonSubtrack={clickButtonSubtrack} clickButtonDelete={clickButtonDelete} totalPay={totalPay} clickSend = {clickSend}/>
      </section>
    );
  }

}


export default RegisterOrder;
