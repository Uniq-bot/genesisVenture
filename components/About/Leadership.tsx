import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Leadership() {
  const members = [
    {
      name: "John Doe",
      role: "Coder",
      image: "/news2.png",
    },
    {
      name: "John Doe",
      role: "Coder",
      image: "/news2.png",
    },
    {
      name: "John Doe",
      role: "Coder",
      image: "/news2.png",
    },
    {
      name: "John Doe",
      role: "Coder",
      image: "/news2.png",
    },
    {
      name: "John Doe",
      role: "Coder",
      image: "/news2.png",
    },
    {
      name: "John Doe",
      role: "Coder",
      image: "/news2.png",
    },
    {
      name: "John Doe",
      role: "Coder",
      image: "/news2.png",
    },
    {
      name: "John Doe",
      role: "Coder",
      image: "/news2.png",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f6f5f0] py-40">
      <h1 className="font-[PPFONT] text-[210px] font-bold leading-none text-blue-900">
        Leadership <br /> Board
      </h1>
      <div className="grid grid-cols-4 gap-6 mt-30 min-h-100">
        {members.map((member, index) => (
          <div key={index} className="p-4  relative ">
            <div className="relative group  w-full h-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover "
              />
              <div className="w-full h-full absolute group-hover:bg-transparent transition-all duration-500 bg-blue-900/50 " />
              <div className="scale-0 group-hover:scale-100 p-5 origin-bottom-right absolute z-11 bg-white bottom-0 border border-blue-900 right-0 transition-transform duration-300">
              <ArrowUp
                size={40}
                strokeWidth={1}
                className="text-blue-900 rotate-45"
              />
            </div>
            </div>
            <div className="mt-4 text-left">
              <p className="text-[50px] font-[PPFONT] text-blue-900">
                {member.name}
              </p>
              <p className="text-sm font-[GT50] uppercase text-[20px] text-gray-600">
                {member.role}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
