'use server'
import connectDB from "@/utils/connectDB";
import UserModel from "@/utils/models/user.model";
import {compare} from "bcrypt-ts";
import jwt, { JwtPayload } from "jsonwebtoken";
import  Moralis from 'moralis';
import { EvmChain, type EvmNftMetadata } from "@moralisweb3/common-evm-utils";

interface loginSuccess {
    status: "success";
    userId: string;
    loggedInUser:string;
    token:string;
}

interface loginFail {
    status: "error";
    message: "Login Failed...";
}

export interface userInfo {
    userId: string;
    userEmail: string;
    username:string;
}


export const registerUser = async (formData: FormData) => {
    const rawData = {
        username: formData.get("username"),
        userEmail: formData.get('email'),
        password: formData.get("password"),
        cpassword: formData.get("cpassword"),
    }

    await connectDB()
    await UserModel.create({username:rawData.username, email: rawData.userEmail, password: rawData.password})
}

export const logUserIn = async (formData: FormData) => {
    const rawData = {
        userEmail: formData.get('email'),
        password: formData.get("password"),
    }
    await connectDB();
    const user = await UserModel.findOne({email: rawData.userEmail});
    console.log(user)
    if(user){
        //rawData is of type FormDataEntryValue | null but compare is expecting type string so cast it to string with "as"
        const valid = await compare(rawData.password as string, user.password);

        if (valid) {
            const token: string = await user.createJwtToken();
            const res: loginSuccess = {status: "success", userId: user._id.toString(), loggedInUser:user.username, token}
            return res
        }
    }
    const res: loginFail = {status: "error", message: "Login Failed..."};
    return res;
    
}

export const verifyUser = async (token:string): Promise<userInfo | null> => {
    if(process.env.JWT_SECRET){
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            console.log(decoded, 'hello')
            const user:userInfo = {userEmail: decoded.userEmail, userId:decoded.id, username:decoded.username}
            return user
        }catch(err){
            console.log(err)
            return null
        }
    }
    return null
}

const initialiseMoralis = async () => {
    try{
        await Moralis.start({
            apiKey: process.env.MORALIS_API_KEY,
        });
        console.log("Moralis Initialised...");
    }catch(err){
        console.log(err);
    }
}
initialiseMoralis();

export const fetchWalletNfts = async (address:string) => {
    try{
        const chain = EvmChain.SEPOLIA;
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
          address,
          chain,
          normalizeMetadata: true,
        });
        console.log("Fetching wallet NFTs...");
        const metadatas = response.raw.result.map((nft) => {
            return {...nft.normalized_metadata, listed: false}
        });
        return metadatas
    }catch(err){
        console.log(err);
    }
    return 
    
}