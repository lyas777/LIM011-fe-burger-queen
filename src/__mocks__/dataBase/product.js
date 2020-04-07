const products = {
  __collection__: {
    products: {
      __doc__: {
        product001: {
          category: 'breakfast',
          nameProduct: 'Sandwich de jamón y queso',
          offer: false,
          price: 10,
          type: null,
        },
        product002: {
          category: 'drink',
          nameProduct: 'Bebida/gaseosa 500ml',
          offer: false,
          price: 7,
          type: null,
        },
        product003: {
          category: 'burger',
          nameProduct: 'Hamburguesa de pollo',
          offer: true,
          price: 15,
          type: "doble",
        },
      },
    },
  },
};

global.firebase = new MockFirebase(products, { isNaiveSnapshotListenerEnabled: true });
