
export const orders = {
  __collection__: {
    orders: {
      __doc__: {
        order001: {
          waiter: 'John Cena',
          client: 'Yamira Eslint',
          date: { seconds: 1579492064, nanoseconds: 825000000 },
          order: [
            {
              id: '01',
              nameProduct: 'Sandwich de jamón y queso',
              price: 10,
              quantity: 2,
              subTotal: 20,
            },
            {
              id: '02',
              nameProduct: 'Bebida/gaseosa 500ml',
              price: 7,
              quantity: 1,
              subTotal: 7,
            },
            {
              id: '03',
              nameProduct: 'Hamburguesa de res + Huevo',
              price: 16,
              quantity: 1,
              subTotal: 16,
            }
          ],
          table: 1,
          totalPay: 43,
          state: false,
        },

        order002: {
          waiter: 'John Cena',
          client: 'Lilian Cat',
          date: { seconds: 1579492064, nanoseconds: 825000000 },
          order: [
            {
              id: '01',
              nameProduct: 'Jugo de frutas natural',
              price: 7,
              quantity: 1,
              subTotal: 7,
            },
            {
              id: '02',
              nameProduct: 'Hamburguesa de pollo',
              price: 10,
              quantity: 1,
              subTotal: 10,
            },
          ],
          table: 2,
          totalPay: 17,
          state: false,
        },

      },
    },
  },
};

global.firebase = new MockFirebase(orders, { isNaiveSnapshotListenerEnabled: true });
