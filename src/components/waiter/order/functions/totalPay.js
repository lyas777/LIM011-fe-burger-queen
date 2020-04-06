
const totalPay = (orders) => {
  let totalPay = 0;

  orders.forEach((order => totalPay += order.subTotal));

  return totalPay;
}


export default totalPay;
