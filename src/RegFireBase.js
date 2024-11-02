import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addUserToDatabase } from './UserDatabase.js';

export const registerUser = async (login, phone_number, password, confirmPassword) => {
  if (password !== confirmPassword) {
    console.error("Паролі не співпадають. Спробуйте ще раз.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, login, password);
    const user = userCredential.user;

    console.log("Користувач зареєстрований:", user);

    await addUserToDatabase(user.uid, phone_number, user.email);

  } catch (error) {
    console.error("Помилка реєстрації:", error.message);
  }
};