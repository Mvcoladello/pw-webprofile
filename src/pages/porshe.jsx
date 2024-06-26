import React from 'react';
import porscheimg from '../assets/porshe.png';

function Porsche() {
    return (
        <div className="bg-white p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Porsche Website</h1>
            <p className="text-gray-600 mb-4">
                Website for Porsche enthusiasts and car lovers.
            </p>
            <img
                src={porscheimg}
                alt="Porsche car"
                className="w-full rounded-lg shadow-md"
            />
            <div className="mt-8 flex justify-center space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            <p className="text-gray-500 text-center mt-8">© 2022 All rights reserved.</p>
        </div>
    );
}

export default Porsche;