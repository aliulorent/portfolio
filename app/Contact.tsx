"use client"
import React from 'react'
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
    
    const {register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        window.location.href = `mailto:aliulorent@gmail.com?subject=${data.subject}&body=${data.message} From ${data.name}, (${data.email})`
    };
    
    return (
    <div className='h-screen flex relative flex-col text-center max-w-7xl px-8 justify-center mx-auto items-center'>
        <h3 className='absolute top-20 mx-auto uppercase font-bold tracking-widest opacity-30'>Contact</h3>
        <h2 className='font-semibold text-white text-3xl'>Send me an email!</h2>
        <div className='flex items-center gap-2 m-6'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p className='text-yellow-200 -mt-1 font-semibold'>aliulorent@gmail.com</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input {...register('name')} placeholder="Name" className='inputField' type="text"/>
                <input {...register('email')} placeholder='Email' className='inputField' type="email"/>
            </div>
            <input {...register('subject')} placeholder='Subject' className='inputField' type="text"/>
            <textarea {...register('message')} placeholder='Message' className='inputField'/>
            <button type="submit" className='bg-yellow-200 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>

    </div>
    )
}

export default Contact
