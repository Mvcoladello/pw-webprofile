import React from 'react';
import  porshe  from '../assets/porshe.png';
import  webmotors  from '../assets/webmotors.png';
import  mercadoLivre  from '../assets/mercadolivre.png';
import trivago  from '../assets/trivago.png';

const ProjectCard = ({ img, title, year, category, description }) => {

  return (

    <div className="bg-white shadow-md rounded-md p-4">

      <img src={img} alt={title} className="w-full h-48 object-cover rounded-t-md" />

      <div className="p-4">

        <div className="flex justify-between mb-2">

          <h3 className="text-lg font-bold">{title}</h3>

          <span className="text-gray-600">{year}</span>

        </div>

        <p className="text-gray-600">{category}</p>

        <p className="text-gray-600">{description}</p>

      </div>

    </div>

  );

};


export function FeaturedWorksSection (){

  const projects = [

    {

      img: porshe, // Replace with your actual image URL

      title: 'Porshe web site',

      year: 2019,

      category: 'e-commerce',

      description:

        'site da porshe para voce ficar personalizando sua 911 como sempre sonhou',

    },

    {

      img: mercadoLivre, // Replace with your actual image URL

      title: 'Mercado livre web site',

      year: 2018,

      category: 'e-commerce',

      description:

        'site do mercado livre para voce comprar e vender seus produtos',

    },

    {

      img: webmotors, // Replace with your actual image URL

      title: 'Sitezinho dos carros',

      year: 2018,

      category: 'carros vrum vrum',

      description:

        'site para voce comprar e vender seus carros, motos, caminhoes e chegar pra ver quanto que ta aquela lamborghini',

    },
    {

      img: trivago, // Replace with your actual image URL

      title: 'Sitezinho dos Hoteis',

      year: 2020,

      category: 'Hotel trivago',

      description:

        'site para voce comparar os precos de hotel e achar o mais barato para sua viagem',

    },

  ];


  return (

    <div className="container mx-auto p-4">

      <h2 className="text-2xl font-bold mb-4">Featured works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {projects.map((project, index) => (

          <ProjectCard key={index} {...project} />

        ))}
        <button ></button>

      </div>

    </div>

  );

};


