"use client"
import React, {useContext, useEffect, useState} from 'react';
import { AppContext } from '@/context/appContext';
import { Tabs } from "flowbite-react";
import { fetchWalletNfts } from '@/app/actions';
import { CardWImg } from '../CardWImg';

const UserNfts = ({username}:{username: string | undefined}) => {
  const contextVar = useContext(AppContext);
  const [walletNfts, setWalletNfts] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    const getNfts = async () => {
      if (contextVar?.connectedAddress) {
        const metadatas = await fetchWalletNfts(contextVar.connectedAddress);
        setWalletNfts(metadatas); 
        console.log(metadatas)
      }
    };

    getNfts();
  }, [contextVar?.connectedAddress]); 
  
  return (
    <div className='mt-2'>
      <Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title={`${username}'s NFTs`}>
       {
        contextVar?.connectedAddress ? 
        <div className='grid rid-cols-1 sm:grid-cols-3'>
          {
            walletNfts?.length === 0 ? 
            (<span>You have no NFTs.</span>) : 
            walletNfts?.map((nft) => {
              return <div className='w-full'><CardWImg title={nft.name} description={nft.description} imgUrl={nft.image}/></div>
            })
          }
        </div>: 
        <p>Connect wallet to see your NFTs.</p>
       }
        
      </Tabs.Item>
      <Tabs.Item title="Listed NFTs">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
      </Tabs.Item>
      <Tabs.Item title="Your Favourites">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
      </Tabs.Item>
    </Tabs>
    </div>
  )
}

export default UserNfts
