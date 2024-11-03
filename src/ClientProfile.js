import React, { useState } from "react";
import styles from "./style/ClientProfile.module.css";
import userImage from "./assets/user-gray.png";
import ButtonBack from "./components/ButtonBack";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider  } from "firebase/auth";
import { useAuth } from "./AuthDataBase";
import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

const ClientProfile = () => {
    const {user} = useAuth();
    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profileImage, setProfileImage] = useState(userImage);

    const toggleOldPasswordVisibility = () => setOldPasswordVisible(!oldPasswordVisible);
    const toggleNewPasswordVisibility = () => setNewPasswordVisible(!newPasswordVisible);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) setProfileImage(URL.createObjectURL(file));
    };

    const handlePasswordChange = async () => {
        const credential = EmailAuthProvider.credential(user.email, oldPassword);
    
        try {
            await reauthenticateWithCredential(user, credential);
        
            await updatePassword(user, newPassword);
            alert("Password changed successfully");
        } catch (error) {
            alert("An error occurred when changing the password.")
        }
    };

    const updateUserInDatabase = async (uid, userData) => {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, userData);
    };

    const handlePhoneNumberChange = async () => {
        try{
            await updateUserInDatabase(user.uid, { phone_number: phoneNumber});
            alert("Phone number changed successfully");
        } catch {
            alert("An error occurred when changing the phone number.")
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Profile</span>
                <ButtonBack text="Back" to="/client"/>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.imageContainer}>
                    <img src={profileImage} alt="User Profile" className={styles.profileImage} />
                    <input type="file" onChange={handleImageUpload} className={styles.imageInput} />
                </div>
                <div className={styles.fieldsContainer}>
                    <div className={styles.field}>
                        <label>Old Password</label>
                        <div className={styles.passwordContainer}>
                            <input
                                type={oldPasswordVisible ? "text" : "password"}
                                className={styles.passwordInput}
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                            <button
                                onClick={toggleOldPasswordVisibility}
                                className={styles.visibilityButton}
                            >
                                {oldPasswordVisible ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label>New Password</label>
                        <div className={styles.passwordContainer}>
                            <input
                                type={newPasswordVisible ? "text" : "password"}
                                className={styles.passwordInput}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <button
                                onClick={toggleNewPasswordVisibility}
                                className={styles.visibilityButton}
                            >
                                {newPasswordVisible ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <button className={styles.changePasswordButton} onClick={handlePasswordChange}>
                        Change Password
                    </button>
                    <div className={styles.field}>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            className={styles.phoneNumberInput}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <button className={styles.changePhoneButton} onClick={handlePhoneNumberChange}>
                        Change Phone Number
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientProfile;
