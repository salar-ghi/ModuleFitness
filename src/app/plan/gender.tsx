'use client';
import React, { useState } from 'react'
import Image from 'next/image';

type Gender = 'male' | 'female' | null;

interface GenderOption {
    id: string;
    label: string;
    image: string;
}

const genderOptions: GenderOption[] = [
    {id: 'male', label:'Male', image:'/male-icon.jpg'},
    {id: 'female', label:'Female', image:'/female-icon.jpg'}
]

const GenderPage : React.FC = () => {
    const [gender, setGender] = useState<Gender>(null);

    const handleGenderSelect = (selectedGender: Gender) => {
        setGender(selectedGender);
    };

    return (
        <div className='flex flex-wrap justify-center gap-4 p-4'>
            <div className={`mx-2 mb-4 cursor-pointer transition-all duration-300 ${
                    gender === 'male' ? 'scale-105' : '' } `} 
                    onClick ={() => handleGenderSelect('male')} >

                <div className={`w-48 h-48 flex items-center justify-center rounded-lg overflow-hidden ${
                    gender === 'male' ? 'border-2 border-blue-500' : 'border-1 border-gray-300' }`}>
                        <Image className='' src="/male-icon.jpg" alt="Male" width={180} height={185} />
                </div>
                    <p className='text-center mt-2 text-lg font-semibold'>Male</p>
            </div>
            
            <div className={`mx-2 mb-4 cursor-pointer transition-all duration-300 ${
                    gender === 'female' ? 'scale-105' : '' } `} 
                    onClick ={() => handleGenderSelect('female')} >

                <div className={`w-48 h-48 flex items-center justify-center rounded-lg overflow-hidden ${
                    gender === 'female' ? 'border-2 border-pink-400' : 'border-2 border-gray-300' }`}>
                        <Image src="/female-icon.jpg" alt="Female" width={180} height={185} />
                </div>
                    <p className='text-center mt-2 text-lg font-semibold'>Female</p>
            </div>
        </div>
    );
};

export default GenderPage