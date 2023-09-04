import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	writeBatch,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyChuU8N5zUTK0hq_wkQnrBdryGNbPqQ4cY',
	authDomain: 'crwn-clothing-db-74574.firebaseapp.com',
	projectId: 'crwn-clothing-db-74574',
	storageBucket: 'crwn-clothing-db-74574.appspot.com',
	messagingSenderId: '194717612485',
	appId: '1:194717612485:web:575e826df6a87e755f33ac',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd,
	field
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('done');
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});

	return categoryMap;
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;
	const userDocref = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocref);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userDocref, {
				displayName,
				email,
				createAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log('catching error', error.message);
		}
	}
	return userDocref;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
