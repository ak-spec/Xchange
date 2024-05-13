// authContext.js
'use client'
import { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { verifyUser } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { userInfo } from '@/app/actions';
import { useAccount } from 'wagmi';


interface AppContext {
    user: userInfo | null;
    setuser: Dispatch<SetStateAction<userInfo | null>>;
    connectedAddress: `0x${string}` | undefined;
    isConnecting: boolean;
    isDisconnected: boolean;
}

export const AppContext = createContext<AppContext | null>(null);

export const AppProvider = ({ children }: {children: React.ReactNode}) => {
  const [user, setuser] = useState<userInfo | null>(null); 
  const { address, isConnecting, isDisconnected } = useAccount();
  const router = useRouter();



  const fetchUser = async () => {
    if(window.localStorage.getItem("user")){
      const token = window.localStorage.getItem("user");
      const user = await verifyUser(token as string);
      if(user){
        setuser(user);
        router.push(`/user/${user.userId}`);

      }else{
        window.localStorage.removeItem("user");
        router.push("/");
      } 
    } 
  }
  useEffect(() => {
    fetchUser();
  }, [])


  return (
    <AppContext.Provider value={{ user, setuser, connectedAddress:address, isConnecting, isDisconnected }}>
      {children}
    </AppContext.Provider>
  );
};

