"use client"
import React from 'react';
import Swal from 'sweetalert2';
import Image from 'next/image';

const askMail = () =>{
  Swal.fire({
    title: 'Newsletter',
    text: 'Ingrese su mail para subscribirse ',    
    input: 'email',
    inputPlaceholder: "ejemplo@mail.com",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Aceptar',    
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Gracias por subscribirte al newsletter",
        icon: "success"
      });
    }
  });
};


const callout = [   
    {
      name: '01/10/2024',
      description: 'Ospitalità Italiana: Un reconocimiento a la excelencia en la gastronomía',
      imageSrc: '/Logo.jpg',
      imageAlt: 'mdita',
      width: 1000,
      height: 1000,
      href: '/es/news/ospitalita2024',
    },
    {
      name: '23/09/2024.',
      description: 'La CCI en Radio La Red',
      imageSrc: '/radio.jpg',
      imageAlt: 'lared',
      width: 1000,
      height: 1000,
      href: '/es/news/radio',
    },  
    {
      name: '28/08/2024',
      description: 'Éxito rotundo en las Jornadas de Ciencias Económicas de la UNCuyo con participación de la Cámara de Comercio Italiana de Mendoza',
      imageSrc: '/uncuyo.jpg',
      imageAlt: 'unc',
      width: 1000,
      height: 1000,
      href: '/es/news/uncuyo',
    },
  ]
  
  export default function NewsSection() {
    
    return (
      <div className="bg-white py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Últimas Noticias</h2>
            <p className="mt-1 text-lg leading-8 text-gray-600">
            Mantengase al día con lo mas importante
            </p>
          </div>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:space-y-0">
              {callout.map((callout) => (
                <div key={callout.name} className="group relative rounded-lg px-1 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80">
                  <div className="relative mt-5 h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      width={callout.width}
                      height={callout.height}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-500 px-4">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 mb-6 text-left px-4">{callout.description}</p>
                </div>
              ))}
            </div>

          <div className="flex justify-center mt-12">
            <button type="button" onClick={askMail} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Asociate a nuestro Newsletter</button>
          </div>
          
        </div>
      </div>
    ) 
  }
  