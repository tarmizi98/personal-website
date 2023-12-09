import React from 'react'

const TabButon = ({ active, selectTab, children}) => {
const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-gray-300 border-b border-purple-500'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    </button>
  );
}

export default TabButon