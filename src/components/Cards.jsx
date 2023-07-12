import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Android Development</h2>
                    <p className='text-center text-4xl font-bold'>$120</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Learn From Industry Experts </p>
                        <p className='py-2 border-b mx-8'>Learn Java,SQL,SpringBoot,and other demanding skills</p>
                        <p className='py-2 border-b mx-8'>Course Duration-6months.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Let's Start</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Web Development</h2>
                    <p className='text-center text-4xl font-bold'>$129</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Learn From Industry Experts </p>
                        <p className='py-2 border-b mx-8'>Learn HTML,CSS,Javascript,React,node etc</p>
                        <p className='py-2 border-b mx-8'>Course Duration 6 Months.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-gray-100' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Machine Learning</h2>
                    <p className='text-center text-4xl font-bold'>$159</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Learn from industry Experts </p>
                        <p className='py-2 border-b mx-8'>Learn Python,statistics,Sql,and other technologies</p>
                        <p className='py-2 border-b mx-8'>Course Duration 9 Months</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
