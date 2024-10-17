"use client"
import { useRef } from 'react';

export default function CardCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-5 px-9 bg-sky-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4 px-8">
          <h3 className="text-xl text-slate-700  font-semibold">Productos mas vendidos en la Categoria ________</h3>
          <div className="space-x-2 flex">
            <button
              onClick={scrollLeft}
              className="p-2 bg-blue-500 text-white rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="p-2 bg-blue-500 text-white rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide"
        >
        
          <div className="min-w-[300px] h-64 p-4 bg-indigo-950  shadow-md rounded-lg">

          </div>
          <div className="min-w-[300px] h-64 p-4 bg-indigo-950  shadow-md rounded-lg">

          </div>
          <div className="min-w-[300px] h-64 p-4 bg-indigo-950  shadow-md rounded-lg">

          </div>
          <div className="min-w-[300px] h-64 p-4 bg-indigo-950  shadow-md rounded-lg">

          </div>
          <div className="min-w-[300px] h-64 p-4 bg-indigo-950  shadow-md rounded-lg">

          </div>
          <div className="min-w-[300px] h-64 p-4 bg-indigo-950  shadow-md rounded-lg">

          </div>

        </div>
      </div>
    </section>
  );
}
