import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function MostRecent() {
  const mostRecent = [
    {
      title: "Dolce & Gabbana Boutique",
      type: "Retail",
      image: "/image4.png",
    },
    {
      title: "Tiffany Flagship",
      type: "Retail",
      image: "/image5.png",
    },
    {
      title: "Dream Hotel",
      type: "Hotel",
      image: "/image6.png",
    },
  ];
  return (
    <div className="w-full min-h-screen px-5 border-t border-blue-900 bg-[#e9e7e0] pt-20">
      <h1 className="lg:text-[200px] text-[50px] text-center font-[PPFONT] font-bold leading-none text-blue-900">
        Most Recent <br /> Projects
      </h1>
      <div className="grid grid-cols-3 relative min-h-200 mt-25 gap-10">
        {mostRecent.map((item, index) => (
          <div key={index} className="w-full border-l p-2 border-blue-900">
            <div className="flex justify-between font-[PPFONT] text-blue-900 text-sm md:text-base lg:text-lg pr-2 md:pr-10 lg:pr-50">
              <p>0{index + 1}.</p>
              <p>{item.type}</p>
            </div>
            <div className={`mt-4 bg-[#e9e7e0] relative -left-5 top-1/2 px-10 py-5 transform -translate-y-1/2 ${index===1? 'mb-50' : ''}`}>
              <h1 className="font-[PPFONT] text-blue-900 text-lg md:text-xl lg:text-5xl pr-5 mb-3">
                {item.title}
              </h1>
              <div className="w-100 group h-100 relative overflow-hidden ">
                <div className="w-full cursor-pointer h-full group-hover:opacity-0 transition-opacity duration-300 absolute z-10 bg-blue-900/70" />
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover absolute" 
                />
                <div className="scale-0 group-hover:scale-100 p-5 origin-bottom-right absolute z-11 bg-white bottom-0 border border-blue-900 right-0 transition-transform duration-300">
                  <ArrowUp size={40} strokeWidth={1} className="text-blue-900 rotate-45" />
                </div>
              </div>
            </div>
          </div>
        ))}
       <div className="absolute bottom-5 left-[45%] -translate-x-1/2 bg-[#e9e7e0] w-150  ">
         <button className="uppercase  font-mono px-10 py-5 bg-blue-900 ml-35">
            View ALL Products
        </button>
       </div>
      </div>
    </div>
  );
}
