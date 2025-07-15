import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'default', 
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variantClasses = variant === 'outline' 
    ? 'border border-current bg-transparent hover:bg-current hover:text-white' 
    : 'bg-blue-600 text-white hover:bg-blue-700';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};