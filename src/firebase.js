import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDdW_VL08kFRvYB5BkgWHLCluFyj83i-mY',
  authDomain: 'messenger-clone-2021july.firebaseapp.com',
  projectId: 'messenger-clone-2021july',
  storageBucket: 'messenger-clone-2021july.appspot.com',
  messagingSenderId: '100732360209',
  appId: '1:100732360209:web:445019aae82e3ef28a03b0',
  measurementId: 'G-3BSBC831CG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
