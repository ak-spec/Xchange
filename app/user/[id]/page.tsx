import React from 'react';
import UserModel from "@/utils/models/user.model";
import connectDB from '@/utils/connectDB';
import Hero from '@/components/UI/hero';
import UserNfts from '@/components/UI/walletNfts';
import TopCreators from '@/components/UI/topCreators';

export async function generateStaticParams() {
    await connectDB();
    console.log("fetching user ids on server...")
    const users = await UserModel.find({});
    // console.log(users)
    return users.map((user) => ({
      id: user._id.toString(),
    }));
}

const UserPage = async ({params}: {params: {id: string}}) => {
    await connectDB();
    const user = await UserModel.findById(params.id);
    return (
        <div className='text-white text-center'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-4 py-2'>
                <div className='sm:col-start-1 sm:col-span-3'>
                    <div className='flex flex-col'>
                        <div className='flex-grow'><Hero /></div>
                        <div><UserNfts username={user?.username}/></div>
                    </div>
                </div>
                <div className='sm:col-start-4 sm:col-span-1'>
                    <div className='mt-4'><TopCreators/></div>
                </div>
                
            </div>
        </div>
    )
}

export default UserPage



