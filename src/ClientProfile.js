import React, { useState } from "react";
import styles from "./style/ClientProfile.module.css";
import userImage from "./assets/user-gray.png";

const ClientProfile = () => {
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

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Profile</span>
                <button className={styles.backButton}>Back</button>
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
                    <button className={styles.changePasswordButton}>
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
                    <button className={styles.changePhoneButton}>
                        Change Phone Number
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientProfile;
