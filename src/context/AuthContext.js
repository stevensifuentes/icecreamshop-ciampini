import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
          setUser(userAuth);
          setLoading(false);
      })
    
      return unsubscribe
    }, [])
    
    return (
        <AuthContext.Provider value={{ user }}>
            { !loading && children }
        </AuthContext.Provider>
    )
}