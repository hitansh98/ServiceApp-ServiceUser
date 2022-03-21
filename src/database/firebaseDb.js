import * as firebase from 'firebase';

const firebaseConfig = {
    //fb credentials deleted for privacy reasons.
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
