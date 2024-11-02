import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginUser = async (login, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, login, password);
    console.log("Користувач увійшов:", userCredential.user);

    return true;

  } catch (error) {
    console.error("Помилка входу:", error.message);
    return false;
  }
};