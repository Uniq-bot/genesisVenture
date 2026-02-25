import Description from "@/components/Home/Description";
import Hero from "@/components/Home/Hero";
import MostRecent from "@/components/Home/MostRecent";
import OurServices from "@/components/Home/OurServices";
import Process from "@/components/Home/Process";

export default function Home(){
  return(
   <div className="w-full min-h-screen  text-white font-PPFONT">
     <Hero />
     <Description />
     <OurServices />
     <Process />
     <MostRecent />
   </div>
  )
}