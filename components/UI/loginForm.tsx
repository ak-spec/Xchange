"use client";
import React, { useState, useContext, useEffect } from 'react'
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { AppContext } from '@/context/appContext';
import { logUserIn } from '@/app/actions';
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [emailValid, setEmailValid] = useState<boolean>(true);

    const contextVariables = useContext(AppContext);
    useEffect(() => {
        console.log(contextVariables)
    }, []);

    function onCloseModal() {
        setOpenModal(false);
    }

    const handleLogin =  async (formData: FormData) => {
        const email = formData.get("email") as String;

        if(!email?.includes("@")){
            setEmailValid(false);
        }else{
            const res = await logUserIn(formData);
            console.log(res)
            if(res?.status === "success"){
                contextVariables?.setuser(res.userId);
                window.localStorage.setItem("user", res.token);
                //redirect to user dashboard page
                router.push(`/user/${res.userId}`);
            }else{
                console.log("Invalid User!")
            }
        }
    }
    return (
        <>
            <Button gradientDuoTone="purpleToPink" onClick={() => setOpenModal(true)}>Login</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                <form className="space-y-6" action={handleLogin}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Login</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput
                            id="email"
                            placeholder="name@company.com"
                            required
                            name="email"
                        />
                        <span className='text-small text-rose-400'>{!emailValid && "Invalid Email!!"}</span>
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput id="password" type="password" name="password" required />
                    </div>
                    <div className="w-full">
                    <Button type='submit'>Log in to your account</Button>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?&nbsp;
                    <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                        Create account
                    </a>
                    </div>
                </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoginForm



