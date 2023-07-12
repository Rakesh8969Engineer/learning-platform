import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>LEARN FROM INDUSTRY EXPERTS</p>
          <p>
          Here are several advantages to learning from industry experts, such as getting acquainted with professional etiquette, acquiring professional knowledge, and getting to know the internal workings of an organization. The key advantages are described low under the following sub-headings
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-sky-700 '>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
