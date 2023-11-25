import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const LoginGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  };

  const loginByEmail = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const CreateUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  const UpdateProfile= (name,photo)=>{
    
    return updateProfile(auth.currentUser, {
        displayName:name,
        photoURL:photo

    })
  }
  useEffect(()=>{
    const observer = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        return observer()
    }
  },[])

  const AuthInfo = {
    user,
    loading,
    LoginGoogle,
    loginByEmail,
    CreateUser,
    logOut,
    UpdateProfile

  };
  return <AuthContext.Provider value={AuthInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
