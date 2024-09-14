import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "./AuthContext";

const UserProfileContext = createContext();

export function useUserProfile() {
  return useContext(UserProfileContext);
}
export const UserProfileProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  // Fetch user profile data from Firestore
  const fetchUserProfile = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "Users", uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        if (data) {
          setProfileData(data);
          setLoadingProfile(false);
        } else {
          console.log("Data missing for user:", uid);
        }
      } else {
        console.log("No such profile document in Firestore for user:", uid);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setLoadingProfile(true);
      fetchUserProfile(currentUser.uid)
        .then(() => setLoadingProfile(false))
        .catch((error) => console.error("Error fetching user profile:", error));
    } else {
      setLoadingProfile(false);
    }
  }, [currentUser]);

  const value = { profileData, loadingProfile };

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};
