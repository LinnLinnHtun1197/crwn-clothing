import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAejVzuYeV4U39N-_v4sJRwPd32DifdNYI",
    authDomain: "crwn-db-2a30a.firebaseapp.com",
    databaseURL: "https://crwn-db-2a30a.firebaseio.com",
    projectId: "crwn-db-2a30a",
    storageBucket: "crwn-db-2a30a.appspot.com",
    messagingSenderId: "562981229988",
    appId: "1:562981229988:web:daefbd27e7e8d673f0dd31",
    measurementId: "G-89FYT608E0"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promot: 'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;