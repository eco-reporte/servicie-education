import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
import { firebaseClientConfig } from './firebaseClientConfig';

const app = initializeApp(firebaseClientConfig);
const storage = getStorage(app);

export { storage, ref };
