// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBzqrMPTE9KkKdirGDagGkQd5fBBAouffA',
  authDomain: 'tra-rems.firebaseapp.com',
  projectId: 'tra-rems',
  storageBucket: 'tra-rems.appspot.com',
  messagingSenderId: '4224607964',
  appId: '1:4224607964:web:7e4152596e549a9e11b619',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
