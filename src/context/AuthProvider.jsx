import app from '@/firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(false)

  // Create User
  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  // Sign In
  const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  // current user 
  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser)
    });
    return () =>{
      return unSub()
    }
  },[])

  const authInfo = {
    user,
    setLoading,
    createUser,
    signIn

    
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider