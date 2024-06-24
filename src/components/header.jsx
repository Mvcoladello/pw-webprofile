import React from 'react';

export  function Header(){
    return (
        <nav className="container mx-auto p-4 flex justify-end">

        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-bold mx-4">
  
          Works
  
        </a>
  
        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-bold mx-4">
  
          Blog
  
        </a>
  
        <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-bold mx-4">
  
          Contact
  
        </a>
  
      </nav>
    );
};
