


export default function PinPerspective  ({
    title,
  }: {
    title?: string;
  }) {
    return (
      <div
        className="pointer-events-none   w-full h-80 flex items-center justify-center opacity-0 lg:group-hover/pin:opacity-100 z-[60] transition duration-500"

      >
        <div className="w-full h-full -mt-7 flex-none inset-0">
          <div className="absolute top-0 inset-x-0 flex justify-center">
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                {title}
              </span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
            </div>
          </div>
       
  
          <>
            <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
            <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
            <div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
            <div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
          </>
        </div>
      </div>
    );
  };