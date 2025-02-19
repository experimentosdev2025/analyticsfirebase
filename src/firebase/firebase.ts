import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBevpbdQsuM0JHQLd-jo9Z5Wkun-6HYcZA",
  authDomain: "analyticsfirebase-a1108.firebaseapp.com",
  projectId: "analyticsfirebase-a1108",
  storageBucket: "analyticsfirebase-a1108.firebasestorage.app",
  messagingSenderId: "816433950789",
  appId: "1:816433950789:web:094959304e7cad1f93332c",
  measurementId: "G-YTMRV21EGE"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };