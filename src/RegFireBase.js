import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addUserToDatabase } from './UserDatabase.js';

export const registerUser = async (email, phone_number, password, confirmPassword) => {
  if (password !== confirmPassword || phone_number === "") {
    console.error("Паролі не співпадають. Спробуйте ще раз.");
    return false;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("Користувач зареєстрований:", user);

    await addUserToDatabase(user.uid, phone_number, user.email);

    return true;

  } catch (error) {
    console.error("Помилка реєстрації:", error.message);

    return false;
  }
};