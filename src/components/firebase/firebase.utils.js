import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// our web api keys
const config = {
    apiKey: "AIzaSyDRi8-HZIdFw7ImeJM4Tg7kyIaB262tMks",
    authDomain: "netfit-91b8f.firebaseapp.com",
    projectId: "netfit-91b8f",
    storageBucket: "netfit-91b8f.appspot.com",
    messagingSenderId: "67201879440",
    appId: "1:67201879440:web:eaf132b80904227d2d7715"
}

// creating auth and saving in the firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;