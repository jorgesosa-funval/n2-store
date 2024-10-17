import Image from "next/image";
import React from "react";

{
  /* <div class="abajo h-full w-full bg-green-500"></div>
<div class="encima absolute inset-0 flex items-center justify-center bg-red-500 h-32 w-32">
  Contenido centrado
</div> */
}
const HeroItems = ({ item, className, title = "", image = "", price = 0 }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="rounded-t-full bg-white p-12 overflow-hiddenx shadow-lg group-hover:blur-sm h-full">
        <div className="">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="w-full relative"
          />
        </div>
      </div>
      <div className="absolute bottom-4  bg-transparent w-full h-full opacity-50x content-center">
        <div className="w-3/4 mx-auto flex flex-col items-center justify-center text-xs bg-slate-200 shadow-xl rounded-xl p-2 ">
          <h3 className="font-bold ">{title.slice(0, 10)}</h3>
          <p className="text-sm font-semibold">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

// Clase de ejemplo
// h-[calc(100vh-10rem)] bg-slate-100
const HeroSection = ({ collection, className }) => {
  return (
    <div className={` pt-20   ${className}`}>
      <div className="flex-col  h-full content-end ">
        <div className="mx-auto w-3/4 text-center flex flex-col items-center gap-6">
          <h3 className="text-4xl font-bold">
            Where style speaks, trends resonate, fashion flourishes
          </h3>
          <p className="text-gray-500">
            Unveiling a fashion destination where trends blend seamlessly with
            your individual style aspirations. Discover today!
          </p>
          <button className="font-semibold bg-gradient-to-br from-white-400 to-black-500 border rounded-full  px-4 py-[0.4rem]  shadow-[0px_18px_20px_-10px_rgba(100,105,116,0.7)] flex">
            <span>New collection</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="overflow-hidden">
          <div className="grid grid-cols-5 gap-1 relative bottom-[-5rem] ">
            {collection.map((item, index) => {
              let className = "";
              switch (index) {
                case 0:
                  className = "rotate-6";
                  break;
                case 1:
                  className = "rotate-6 -translate-y-6";
                  break;
                case 2:
                  className = "rotate-6x -translate-y-10";
                  break;
                case 3:
                  className = "-rotate-6 translate-y-6";
                  break;
                case 4:
                  className = "-rotate-6";
                  break;
              }
              return (
                <HeroItems
                  key={item.id}
                  item={item}
                  className={className}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
