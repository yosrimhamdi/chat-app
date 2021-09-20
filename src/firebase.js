import { initializeApp } from 'firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyALYgOj0fsj3hAiFFDDItLA1sMX2HlPfiw',
  authDomain: 'chat-app-41bde.firebaseapp.com',
  projectId: 'chat-app-41bde',
  storageBucket: 'chat-app-41bde.appspot.com',
  messagingSenderId: '10565670356',
  appId: '1:10565670356:web:81558b97365fd934eab241',
  databaseURL: 'https://chat-app-41bde-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
