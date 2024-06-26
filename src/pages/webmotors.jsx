import React from 'react';
import webmotors from '../assets/webmotors.png';

export default function Webmotors() {
    return (
        <div className="bg-white p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Webmotors website</h1>
            <p className="text-gray-600 mb-4">
                Website for buying and selling cars - Webmotors
            </p>
            <img
                src={webmotors}
                alt="Red car"
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
            <p className="text-gray-500 text-center mt-8">Copyright © 2020 All rights reserved.</p>
        </div>
    );
}
