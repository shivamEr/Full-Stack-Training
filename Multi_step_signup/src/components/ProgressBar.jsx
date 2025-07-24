// src/components/ProgressBar.jsx
import React from 'react';
import { useMultiForm } from '../Context/MultiFormContext';

const steps = ['Basic Info', 'Contact Info', 'Review & Submit'];

export const ProgressBar = () => {
  const { step } = useMultiForm();

  return (
    <div className="flex justify-between w-full max-w-2xl px-4">
      {steps.map((label, index) => {
        const current = index + 1;
        const isCompleted = step > current;
        const isActive = step === current;

        return (
          <div key={index} className="flex flex-col items-center relative flex-1">
            {/* Line between steps */}
            {index !== 0 && (
              <div className={`absolute left-0 top-4 w-full h-1 z-0 ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            )}

            {/* Circle */}
            <div className={`z-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium
              ${isCompleted ? 'bg-green-500' : isActive ? 'bg-blue-500' : 'bg-gray-300'}`}>
              {current}
            </div>

            {/* Label */}
            <div className="mt-2 text-sm text-center w-24">{label}</div>
          </div>
        );
      })}
    </div>
  );
};
