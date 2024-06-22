'use client'
import React, { useState } from 'react'
import Image from 'next/image'

type Decade = '20s' | '30s' | '40s' | '50s';

interface DecadeInfo {
    image: string;
    title: string;
    description: string;
}
const decadeData: Record<Decade, DecadeInfo> = {
    '20s': {
    image: '/male-icon.jpg',
    title: 'Your 20s: Exploration and Growth',
    description: 'A time for self-discovery, building foundations, and embracing new experiences.',
  },
  '30s': {
    image: '/female-icon.jpg',
    title: 'Your 30s: Establishment and Focus',
    description: 'Settling into careers, relationships, and personal goals with increased clarity.',
  },
  '40s': {
    image: '/3.jpg',
    title: 'Your 40s: Confidence and Stability',
    description: 'Peak of career, family life, and personal confidence with a clearer life direction.',
  },
  '50s': {
    image: '/3.jpg',
    title: 'Your 50s: Reflection and Reinvention',
    description: 'A period of reflection, potential career changes, and focus on personal fulfillment.',
  },
};

const AgePage: React.FC = () => {
    const [SelectedDecade, setSelectedDecade] = useState<Decade | null>(null);
    return (
    // <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {(Object.keys(decadeData) as Decade[]).map((decade) => (
            <div key={decade} 
            className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                SelectedDecade === decade ? 'ring-1 ring-blue-500 scale-105' : 'ring-1 ring-gray-300'
            }`} onClick={() => setSelectedDecade(decade)}>
                <div className='relative h-32'>
                    <Image src={decadeData[decade].image}
                    alt={`Person in their ${decade}`}
                    layout="fill"
                    loading = 'lazy'
                    objectFit='cover'/>
                </div>
                <div className='p-3'>
                    <h3 className='text-lg font-semibold mb-1'>{decadeData[decade].title}</h3>
                    <p className='text-sm text-gray-600 line-clamp-2'>{decadeData[decade].description}</p>
                </div>
            </div>
        ))}

    </div>
  );
};

export default AgePage;