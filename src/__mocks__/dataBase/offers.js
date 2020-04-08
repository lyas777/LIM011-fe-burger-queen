export const offers = {
  __collection__: {
    offers: {
      __doc__: {
        offer001: {
          category: 'burger',
          nameProduct: 'Huevo',
          price: 1,
        },
        offer002: {
          category: 'burger',
          nameProduct: 'Queso',
          price: 1,
        },
      },
    },
  },
};

global.firebase = new MockFirebase(offers, { isNaiveSnapshotListenerEnabled: true });
