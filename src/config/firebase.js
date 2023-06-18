import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCDa4MIpAe87CoPn5_0bUvnK9MnDDaiWNY",
  authDomain: "jornadafullstackebac.firebaseapp.com",
  projectId: "jornadafullstackebac",
  storageBucket: "jornadafullstackebac.appspot.com",
  messagingSenderId: "395279320293",
  appId: "1:395279320293:web:45c882d1b2c0545f6e800c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;