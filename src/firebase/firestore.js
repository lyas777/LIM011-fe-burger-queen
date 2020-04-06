import db from './controller';


export const getProducts = (category) => {
  return db.collection('products').where('category', '==', category).get()
    .then((response) => {
      const arrayProduct = [];

      response.docs.forEach(doc => {
        const product = {
          id: doc.id,
          ...doc.data()
        };

        arrayProduct.push(product);
      });

      return arrayProduct;
    })
};


export const getOffers = (category) => {
  return db.collection('offers').where('category', '==', category).get()
    .then((response) => {
      const arrayOffers = [];

      response.docs.forEach(doc => {
        const offer = {
          id: doc.id,
          ...doc.data()
        };

        arrayOffers.push(offer);
      });

      return arrayOffers;
    })
};


export const addOrder = objectOrder => db.collection('pruebaOrder').add(objectOrder);
