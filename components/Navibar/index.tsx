"use client";

import React, {useContext} from 'react';
import { AppContext } from '@/context/appContext';
import Image from "next/image";
import logo from "../../public/images/logo.png"
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useBalance, useDisconnect } from 'wagmi';
import { type UseBalanceReturnType } from 'wagmi';
import { formatEther } from 'viem'


const Navibar = () => {
  const currRoute = usePathname();
  const router = useRouter();
  const contextVariables = useContext(AppContext);
  const {open} = useWeb3Modal();
  const {disconnect} = useDisconnect();

  let balance: UseBalanceReturnType = useBalance({address: contextVariables?.connectedAddress,});

  let connectedAddress: null | string = null;
  if(contextVariables?.connectedAddress){
    const lenOfAddress = contextVariables.connectedAddress.length
    connectedAddress = contextVariables.connectedAddress.slice(0, 7) + "..." + contextVariables.connectedAddress.slice(lenOfAddress-4, lenOfAddress);
  }
  console.log(contextVariables, balance)


  const signUserOut = () => {
    window.localStorage.removeItem("user");
    contextVariables?.setuser(null);
    disconnect();
    router.push("/");
  }

  const handleWalletConnection = () => {
    if(contextVariables?.isDisconnected){
      open();
    }else{
      disconnect();
    }
  }
    


  return (
    <Navbar className={`dark:bg-slate-800 mx-auto rounded-md bg-slate-200 items-center py-3 ${currRoute === "/explore" || currRoute == "/" ? "container" : ""}`}>
      <Navbar.Brand href="#">
        <Image src={logo} width={35} height={25} alt="cannot load..."/>
        <span className='mx-2 text-lg dark:text-white'>XChange</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle className='mx-2'/>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>
          }
        >
        
          <Dropdown.Header>
            <span className="block text-sm">{contextVariables?.user?.username}</span>
            <span className="block truncate text-sm font-medium">{contextVariables?.user?.userEmail}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={handleWalletConnection}>{contextVariables?.isDisconnected ? "Connect Wallet" : "Disconnect"}</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={signUserOut}>Sign out</Dropdown.Item>
        </Dropdown>
        <div className='dark:text-white ms-2'>
          {
            connectedAddress ? 
            (
              <div className='hidden sm:flex sm:flex-col'>
                <span>{connectedAddress}</span>
                <span>{balance.isSuccess && Number(formatEther(balance.data?.value)).toFixed(2)} ETH</span>
              </div>
            ) : ""
          }
        </div>
        <Navbar.Toggle />
      </div>
      {
        contextVariables?.user ?
        (
        <Navbar.Collapse>
          <Navbar.Link href={`/user/${contextVariables.user.userId}`} as={Link} active={currRoute===`/user/${contextVariables.user.userId}` ? true: false}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/explore" as={Link}  active={currRoute==="/explore" ? true: false}>Explore</Navbar.Link>
          <Navbar.Link href="/create" as={Link}  active={currRoute==="/create" ? true: false}>Create</Navbar.Link>
          <Navbar.Link href="/about" as={Link}  active={currRoute==="/about" ? true: false}>About</Navbar.Link>
        </Navbar.Collapse>
        ) : (<></>)
      }
    </Navbar>
  )
}

export { Navibar }