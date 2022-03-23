import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyADljImBgUJ1_MTP8jj1G2pbGs_U1d5ceo",
    authDomain: "chatwebapp-grad.firebaseapp.com",
    projectId: "chatwebapp-grad",
    storageBucket: "chatwebapp-grad.appspot.com",
    messagingSenderId: "567417666141",
    appId: "1:567417666141:web:ce524defe90e69bd0cebb4"
}
firebase.initializeApp(config);
firebase.firestore().settings({
    timeStampsInSnapshot: true
});



export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()