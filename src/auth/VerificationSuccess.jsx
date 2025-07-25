import React, { useEffect } from 'react';

const VerificationSuccess = ({ title = 'Success!', message = 'Your action was successful.', onClose, timeout = 2000 }) => {
  useEffect(() => {
    if (!onClose) return;
    const timer = setTimeout(() => {
      onClose();
    }, timeout);
    return () => clearTimeout(timer);
  }, [onClose, timeout]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[260px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center text-black mb-4">{title}</h2>
        <p className="text-center text-gray-600 mb-4">{message}</p>
        <img src="/assets/Success.svg" alt="Success" className=" animate-pulse w-20 h-20 mx-auto" />
      </div>
    </div>
  );
};

export default VerificationSuccess; 