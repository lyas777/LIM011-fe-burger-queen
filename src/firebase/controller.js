import * as firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
        apiKey: "AIzaSyARrpV-s64iqAVmlIFxZgUTCyXpPNismbI",
        authDomain: "burguerqueen-4e436.firebaseapp.com",
        databaseURL: "https://burguerqueen-4e436.firebaseio.com",
        projectId: "burguerqueen-4e436",
        storageBucket: "burguerqueen-4e436.appspot.com",
        messagingSenderId: "290627068866",
        appId: "1:290627068866:web:067a2d77377a8a4db5ac5b"
      };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export default db;