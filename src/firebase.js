import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDfJn9YFCpdGMhQVUyP8JADkSoy7nBLOzo',
  authDomain: 'clone-2a4e6.firebaseapp.com',
  projectId: 'clone-2a4e6',
  storageBucket: 'clone-2a4e6.appspot.com',
  messagingSenderId: '37651917511',
  appId: '1:37651917511:web:74c9c536db628310bf2ce2',
  measurementId: 'G-TJ4NLY98KM',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
