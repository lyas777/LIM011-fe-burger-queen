
const firebasemock = require('firebase-mock');

const mockfirestore = new firebasemock.MockFirestore();


// const mockauth = new firebasemock.MockFirebase();

mockfirestore.autoFlush();
// mockauth.autoFlush();

export default new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  // () => mockauth,
  () => mockfirestore,
);

