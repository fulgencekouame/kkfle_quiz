import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD1JUzn37yVF_Nd8nyarhpdLyXtji6Z580",
    authDomain: "kkfle-quiz.firebaseapp.com",
    databaseURL: "https://kkfle-quiz.firebaseio.com",
    projectId: "kkfle-quiz",
    storageBucket: "kkfle-quiz.appspot.com",
    messagingSenderId: "437433240189",
    appId: "1:437433240189:web:242921dbfe174525547f14"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore()
    }
    //inscription
    signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    //connexion
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword (email, password); 

    //deconnexion
    signoutUser = () => this.auth.signOut();

    //recuperer mot de pass
    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    //firestore
    user = uid => this.db.doc(`users/${uid}`);

}
export default Firebase;