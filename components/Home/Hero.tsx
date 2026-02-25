import { Menu} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <Image 
        src="/background.png" 
        alt="Background" 
        fill 
        className="object-cover -z-10 opacity-90 [filter:sepia(0.3)_saturate(1.2)_hue-rotate(180deg)_brightness(0.9)]"
        priority
      />
      
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900/70 -z-[5]"></div>
      
      <div className="flex justify-between items-center p-3 md:p-5">
        <nav className="bg-blue-900 flex items-center gap-2 md:gap-4 justify-center px-2 md:px-4 py-1">
          <Image src="/logo.png" alt="logo" width={30} height={30} className="md:w-[50px] md:h-[50px]" />
          <p className="font-semithin text-xs md:text-sm">GENESIS VENTURE INC.</p>
        </nav>

        <div className="bg-blue-900 p-2 flex items-center">
          <Menu className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>

      <h1 className="absolute bottom-0 tracking-tight left-0 text-[60px] sm:text-[80px] md:text-[120px] lg:text-[170px] font-[PPFONT] leading-tight pb-5 md:pb-10 pl-3 md:pl-5">
        Genesis
        <br />
        Venture, Inc.
      </h1>
    </div>
  );
}
