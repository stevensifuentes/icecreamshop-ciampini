import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const cancelarSuscripcion = onAuthStateChanged(auth, (userAuth) => {
          setUser(userAuth);
          setLoading(false);
      })
    
      return cancelarSuscripcion
    }, [])
    
    return (
        <AuthContext.Provider value={{ user }}>
            { !loading && children }
        </AuthContext.Provider>
    )
}