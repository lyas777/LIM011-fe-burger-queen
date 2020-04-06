import React from 'react';
import { getProducts, getOffers, addOrder } from '../../firebase/firestore';
import createOrder from './order/functions/createOrder';
import totalPay from './order/functions/totalPay';
import Menu from './menu/Menu';
import RegisterOrder from './order/RegisterOrder';
import ModalOrder from './order/ModalOrder';


class Waiter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [], orders: [], offers: [], productOffer: {}, total: 0, show: false, client: '', table: 1 };

    this.clickTabs = this.clickTabs.bind(this);
    this.clickProduct = this.clickProduct.bind(this);
    this.clickButtonAdd = this.clickButtonAdd.bind(this);
    this.clickButtonSubtrack = this.clickButtonSubtrack.bind(this);
    this.clickButtonDelete = this.clickButtonDelete.bind(this);
    this.clickOffer = this.clickOffer.bind(this);
    this.clickSend = this.clickSend.bind(this);
    this.clickSaveOrderFirestore = this.clickSaveOrderFirestore.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChangeClient = this.handleChangeClient.bind(this);
    this.handleChangeTable = this.handleChangeTable.bind(this);
  }

  clickTabs(category) {
    getProducts(category)
      .then(data => this.setState(
        { products: data }
      ));
  }

  clickProduct(product) {
    if (product.offer) {
      getOffers(product.category)
        .then(data => this.setState(
          { offers: data }
        ));

      const newProductOffer = {
        id: product.id,
        nameProduct: product.nameProduct,
        price: product.price,
      };

      this.setState({ productOffer: newProductOffer });
    }
    else {
      const listOrders = createOrder(product, null, this.state.orders);

      const totalPrice = totalPay(listOrders);

      this.setState({ orders: listOrders });
      this.setState({ total: totalPrice });
    }
  }

  clickOffer(productOffer, offer) {
    const listOrder = createOrder(productOffer, offer, this.state.orders);
    const totalPrice = totalPay(listOrder);

    this.setState({ orders: listOrder });
    this.setState({ total: totalPrice });
    this.setState({ offers: [] });
  }

  clickButtonAdd(product) {
    const arrayOrders = createOrder(product, null, this.state.orders);
    const totalPrice = totalPay(arrayOrders);

    this.setState({ orders: arrayOrders });
    this.setState({ total: totalPrice });
  }

  clickButtonSubtrack(product) {
    const findProduct = this.state.orders.find((element) => element.id === product.id);

    if (findProduct.quantity >= 1) {
      const mapProducts = this.state.orders.map((order) => {
        const editedOrder = order;

        if (order.id === product.id) {
          const counter = editedOrder.quantity -= 1;

          editedOrder.subTotal = counter * order.price;
        }

        editedOrder.subTotal = order.quantity * order.price;

        return order;
      });

      const totalPrice = totalPay(mapProducts);

      this.setState({ orders: mapProducts });
      this.setState({ total: totalPrice });
    }

    if (findProduct.quantity === 0) {
      const orders = this.state.orders;

      const position = orders.findIndex((element) => element.id === findProduct.id);

      orders.splice(position, 1);

      const totalPrice = totalPay(orders);

      this.setState({ orders: orders });
      this.setState({ total: totalPrice });
    }

  }

  clickButtonDelete(product) {
    const orders = this.state.orders;

    const findProduct = orders.find((element) => element.id === product.id);

    const position = orders.findIndex((element) => element.id === findProduct.id);

    orders.splice(position, 1);

    const totalPrice = totalPay(orders);

    this.setState({ orders: orders });
    this.setState({ total: totalPrice });
  }

  handleCloseModal() {
    this.setState({ show: false });
  }

  clickSend() {
    if(this.state.orders.length === 0){
      alert('No existe registros de pedidos para enviar');
    }
    else {
      this.setState({ show: true});
    }
  }

  handleChangeClient(event) {
    this.setState({ client: event.target.value });
  }

  handleChangeTable(event) {
    this.setState({ table: event.target.value });
  }

  clickSaveOrderFirestore() {
    const orderData = {
      waiter: 'John Cena',
      client: this.state.client,
      date: new Date(),
      order: this.state.orders,
      table: this.state.table,
      totalPay: this.state.total,
      state: false,
    }

    if(!this.state.client){
      alert('Por favor registre el nombre del cliente.')
    }
    else {
      addOrder(orderData)
        .then(() => alert('Orden añadida.'))
        .catch(() => alert('Error al registrar la orden.'));

      this.setState({ show: false });
      this.setState({ client: '' });
      this.setState({ table: 1 });
      this.setState({ orders: [] });
      this.setState({ total: 0 });
    }
  }

  render() {
    return (
      <main className="d-flex bd-highlight" data-testid="waiter">
        <Menu clickTabs={this.clickTabs} products={this.state.products} clickProduct={this.clickProduct} offers={this.state.offers} productOffer={this.state.productOffer} clickOffer={this.clickOffer} />
        <RegisterOrder orderProduct={this.state.orders} clickButtonAdd={this.clickButtonAdd} clickButtonSubtrack={this.clickButtonSubtrack} clickButtonDelete={this.clickButtonDelete} totalPay={this.state.total} clickSend = {this.clickSend}/>
        {
          <ModalOrder show = {this.state.show} handleClose={this.handleCloseModal} totalPay={this.state.total} orderProduct={this.state.orders}
          clickSaveOrderFirestore = {this.clickSaveOrderFirestore} client = {this.state.client} handleChangeClient = {this.handleChangeClient} table = {this.state.table} handleChangeTable = {this.handleChangeTable}/>
        }
      </main>

    );
  }
}


export default Waiter;
