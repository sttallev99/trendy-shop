import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'

export const LoginPopup = ({setShowLogin}) => {
    const [state, setState] = useState('Sign Up')
  return (
    <div className='absolute h-full w-full bg-black/40 z-50 flexCenter'>
        <form className='bg-white w-[366px] p-7 rounded-xl shadow-md'>
            <div className='flex justify-between items-baseline'>
                <h4 className='bold-28'>{state}</h4>
                <FaXmark onClick={() => setShowLogin(false)} className='medium-20 text-slate-900/70 cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-4 my-6'>
                {state === "Sign Up" && (
                    <input 
                        name='name'
                        type='text'
                        placeholder='Name'
                        className='bg-primary border p-2 pl-4 rounded-md outline-none' 
                    />
                )}
                <input 
                    name='email'
                    type='email'
                    placeholder='Email'
                    className='bg-primary border p-2 pl-4 rounded-md outline-none' 
                />
                <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    className='bg-primary border p-2 pl-4 rounded-md outline-none' 
                    />
            </div>
            {state === "Sign Up" ? (
                <div className='flex items-baseline gap-x-3 mt-6 mb-4'>
                    <input type="checkbox"  required/>
                    <p>By continuing you agreeyo our <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy</span></p>
                </div>
            ) : (
                <></>
            )}
            <button className='btn-secondary rounded-md w-full mb-1'>
                {state === "Sign Up" ? "Create account" : "Login"}
            </button>
            {state === 'Sign Up' ? (
                    <p>Already have an account? <span
                        onClick={() => setState("Login")}
                        className='text-secondary cursor-pointer'
                    >Login</span></p>
                ) : (
                    <p>Don't have an account? <span
                        onClick={() => setState("Sign Up")}
                        className='text-secondary cursor-pointer'
                    >Sign Up</span></p>
                )}
        </form>
    </div>
  )
}
