import React from 'react';

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? 'text-white border-b-2 border-[#f0810f]'
    : 'text-slate-400';
  return (
    <button onClick={selectTab}>
      <p
        className={`text-lg font-semibold mr-4 hover:text-slate-400 ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
