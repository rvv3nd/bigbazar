import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from '../firebase'

export const authContext = createContext()


export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const signup = (email, password, nombre, telefono, tipo ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unsubsribe()
    }, [])

    const logout = () => {
        signOut(auth)
    }
                

    return  <authContext.Provider 
    value={{
        signup,
        login,
        user,
        logout,
        loading
    }}>
        {children}
    </authContext.Provider>
}