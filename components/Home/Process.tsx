import ScrollAnimated from "./ScrollAnimated";

export default function Process() {
  return (
    <div className="w-full relative bg-[#e9e7e0]">
      <div className="absolute inset-0 font-[PPFONT] md:grid hidden grid-cols-3 w-full pointer-events-none">
        <div className="h-full uppercase text-blue-900 p-2 border-r border-blue-900 text-xs md:text-base">
          process
        </div>
        <div className="h-full border-r border-blue-900 hidden md:block"></div>
        <div className="h-full text-right text-blue-900 uppercase p-2 text-xs md:text-base">
          [0CT. 09]
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-8 md:gap-30 py-10 md:py-0 md:w-1/2 flex-shrink-0">
          <div className="flex md:hidden justify-between text-blue-900 px-3  font-[PPFONT]">
            <p>PROCESS</p>
            <p>[OCT. 09]</p>
          </div>
          <h1 className="font-[PPFONT] top-10 md:top-20 relative pl-3 md:pl-5 text-blue-900 text-[60px] sm:text-[100px] md:text-[150px] lg:text-[190px] leading-45">
            Here <br />{" "}
            <span className="bg-[#e9e7e0] leading-none">at every</span> <br />{" "}
            step
          </h1>
          <div className="w-full md:w-100 relative left-0 md:left-20 px-3 md:px-0">
            <p className="text-blue-900 font-mono text-sm md:text-[18px] uppercase tracking-[1px]">
              Navigating regulatory agencies can seem like an insurmountable
              task for architects, engineers, owners and contractors.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 py-10 md:py-30 relative px-3 md:px-0">
          <ScrollAnimated />
        </div>
      </div>
    </div>
  );
}
