
// const firebasemock = require('firebase-mock');

// const mockfirestore = new firebasemock.MockFirestore();


// // const mockauth = new firebasemock.MockFirebase();

// mockfirestore.autoFlush();
// // mockauth.autoFlush();

// export default new firebasemock.MockFirebaseSdk(
//   // use null if your code does not use RTDB
//   () => null,
//   // () => mockauth,
//   () => mockfirestore,
// );

// const { mockFirebase } = require('firestore-jest-mock');
// // Create a fake firestore with a `users` and `posts` collection
// export default mockFirebase({
//   database: {
//     users: [
//       { id: 'abc123', name: 'Homer Simpson' },
//       { id: 'abc456', name: 'Lisa Simpson' },
//     ],
//     posts: [{ id: '123abc', title: 'Really cool title' }],
//   },
// });

import MockFirebase from 'mock-cloud-firestore';
import { products } from './dataBase/products'

export default new MockFirebase(products);


