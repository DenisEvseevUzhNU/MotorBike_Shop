import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginUser = async (login, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, login, password);
    console.log("Користувач увійшов:", userCredential.user);
  } catch (error) {
    console.error("Помилка входу:", error.message);
  }
};