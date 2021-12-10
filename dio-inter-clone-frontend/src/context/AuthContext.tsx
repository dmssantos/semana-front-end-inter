import { createContext, useState } from 'react';

import { signIn, signUp, SignInData, SignUpData, me } from '../services/resources/user';

interface userDto {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}
interface ContextData {
  user: userDto;
  userSignIn: (userData: SignInData) => void;
  userSignUp: (userData: SignUpData) => void;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<userDto>({} as userDto);

  const userSignIn = async (userData: SignInData) => {
    const { data } = await signIn(userData);

    if(data?.error === 'error'){
      return data;
    }

    if(data.accessToken){
      localStorage.setItem('@Inter:Token', data.accessToken)
    }

    await getCurrentUser();
  }

  const getCurrentUser = async () => {
    const {data} = await me()
    setUser(data)
    return data
  }

  const userSignUp = async (userData: SignUpData) => {
    const { data } = await signUp(userData);
    
    localStorage.setItem('@Inter:Token', data.accessToken)

    await getCurrentUser();
  }

  return (
    <AuthContext.Provider value={{ user, userSignIn, userSignUp }}> 
      {children}
    </AuthContext.Provider>
  )
}