
const createOrder = (product, offer, state) => {

  if (offer !== null) {
    const findProductOffer = state.find((element) => element.id === (product.id + offer.id));

    if (findProductOffer) {
      const mapProducts = state.map((order) => {
        const editedOrder = order;

        if (order.id === (product.id + offer.id)) {
          const counter = editedOrder.quantity += 1;

          editedOrder.subTotal = counter * order.price;
        }

        editedOrder.subTotal = order.quantity * order.price;

        return editedOrder;
      });

      return mapProducts;
    }

    const newOrder = {
      id: product.id + offer.id,
      nameProduct: product.nameProduct + ' + ' + offer.nameOffer,
      price: product.price + offer.price,
      quantity: 1,
      subTotal: product.price + offer.price,
    }

    const arrayOrder = state.concat(newOrder);

    return arrayOrder;
  }

  const findProduct = state.find((element) => element.id === product.id);

  if (findProduct) {

    const mapProducts = state.map((order) => {
      const editedOrder = order;

      if (order.id === product.id) {
        const counter = editedOrder.quantity += 1;

        editedOrder.subTotal = counter * order.price;
      }

      editedOrder.subTotal = order.quantity * order.price;

      return order;
    });

    return mapProducts;
  }

  const newOrder = {
    id: product.id,
    nameProduct: product.nameProduct,
    price: product.price,
    quantity: 1,
    subTotal: product.price,
  }

  const arrayOrder = state.concat(newOrder);

  return arrayOrder;
}


export default createOrder;
