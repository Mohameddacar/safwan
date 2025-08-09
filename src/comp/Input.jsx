import React from 'react';

const Input = ({ placeholder, full }) => {
  return (
    <div className={`mb-5 ${full ? 'w-full' : 'w-[45%]'}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="my-6 pb-3 border-b border-[#00413D] w-full placeholder:text-base placeholder:text-[#00413D] focus:outline-none"
      />
    </div>
  );
};

export default Input;
