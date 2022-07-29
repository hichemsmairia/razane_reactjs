import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgkxuznaoVYn70uVA3aOB6vsdDLDoPCPg",
  authDomain: "smartcompany-b7924.firebaseapp.com",
  databaseURL: "https://smartcompany-b7924-default-rtdb.firebaseio.com",
  projectId: "smartcompany-b7924",
  storageBucket: "smartcompany-b7924.appspot.com",
  messagingSenderId: "762134010824",
  appId: "1:762134010824:web:d635c9398d5f2859c3befd",
  measurementId: "G-X69KL71RBX",
};

// ligne de connection avec le console firebase
const app = firebase.initializeApp(firebaseConfig);
//acces a la base de donnes
var database = app.database();
//acces a l'authentification
const auth = app.auth();

export { database, auth };

// j'ai exporté la base de donnes (pour tempertaure ... )

//j'ai exporté le module de authentification
