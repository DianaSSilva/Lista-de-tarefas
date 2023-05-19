import {initializeApp} from 'firebase/app'
import { getAdditionalUserInfo } from 'firebase/auth';
import{getFirestore}from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCD6OUbVEJqceRt6_Qqh5pZLy_YBUZW87c",
    authDomain: "projeto-com-banco-de-dados.firebaseapp.com",
    projectId: "projeto-com-banco-de-dados",
    storageBucket: "projeto-com-banco-de-dados.appspot.com",
    messagingSenderId: "1098565684462",
    appId: "1:1098565684462:web:d3beda4b2d74d772c5f7ff",
    measurementId: "G-X923EYDN82"
  };
  
  const firebaseapp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseapp);
  const auth = getAuth(firebaseapp)

  export {db, auth};