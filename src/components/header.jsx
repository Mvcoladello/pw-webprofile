import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className="container mx-auto p-4 flex justify-end">
      <Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-bold mx-4">
        Home
      </Link>
      <Link to="/admin" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-bold mx-4">
        Admin
      </Link>
      <Link to="/mercado" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-bold mx-4">
        Mercado Livre
      </Link>
      <Link to="/webmotors" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-bold mx-4">
        webmotors
      </Link>
      <Link to="/porshe" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-bold mx-4">
        porshe
      </Link>
      <Link to="/trivago" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-bold mx-4">
        trivago
      </Link>
    </nav>
  );
}
