import React from 'react';

const CustomButton = ({ children, onClick }) => (
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={onClick}
    >
        {children}
    </button>
);

export default CustomButton;