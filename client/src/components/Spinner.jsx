import React from 'react';

const Spinner = () => {
    return (
        <div className='absolute inset-0 bg-white min-h-screen grid place-items-center z-10'>
            <div className='h-8 w-8 rounded-full border-2 border-orange-500 border-dashed animate-spin'>
            </div>
        </div>
    );
};

export default Spinner;