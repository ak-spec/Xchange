'use client'
import React, { useState } from 'react'
import { Button, Label, Modal, TextInput } from "flowbite-react";
import {registerUser} from "@/app/actions"


type errorValidation = {
    pasword?: string;
    email?: string;
    alreadyRegistered?: boolean
}

const RegisterForm = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [errors, setErrors] = useState<errorValidation>({})
    const [userCreated, setUserCreated] = useState<boolean>(false)

    function onCloseModal() {
        setOpenModal(false);
        setErrors({});
        setUserCreated(false);
    }
   
    const handleFormSubmit = async (formData: FormData) => {
        const errCopy:errorValidation = {}
        const email = formData.get("email") as string;
        console.log(email)
        if(formData.get("password") !== formData.get("cpassword")){
            errCopy["pasword"] = "Passwords do not match!";
        } 
        if(!email.includes("@")){
            errCopy["email"] = "Invalid Email!";
        }
        if(Object.keys(errCopy).length == 0){
            try{
                await registerUser(formData);
                setUserCreated(true);
                setErrors({});
            }catch(err:any){
                if(err.message.includes("E11000")){
                    setErrors({alreadyRegistered:true})
                }
            }
        }else{
            setErrors(errCopy);
        }
    }   

  return (
        <>
        <Button gradientDuoTone="purpleToPink" onClick={() => setOpenModal(true)}>Register</Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
            <form className="space-y-6" action={handleFormSubmit}>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Register</h3>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="username" value="Username" />
                    </div>
                    <TextInput
                        id="username"
                        placeholder="How should we call you?"
                        required
                        name="username"
                    />
                </div>
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
                    <span className={'text-xs text-red-400'}>{errors.email}</span>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput id="password" type="password" name="password" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="cpassword" value="Confirm password" />
                    </div>
                    <TextInput id="cpassword" type="password" name="cpassword" required />
                </div>

                {
                    errors.pasword ? (<span className={'text-xs text-red-400'}>{errors.pasword}</span>) : 
                    errors.alreadyRegistered ? (<span className={'text-xs text-red-400'}>User already Registered.</span>) :
                    userCreated ? (<span className='text-green-400'>{userCreated ? "Registered Successfully" : ""}</span>) : (<></>)
                }
                
                <div className="flex justify-between">
                    <Button type='submit'>Create Account</Button>
                </div>
                
            </form>
            </Modal.Body>
        </Modal>
        </>
    )
    
}

export default RegisterForm
