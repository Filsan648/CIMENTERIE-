import { useEffect, useState } from "react"

export default function Cursor({ isHovering  , text, title }:{isHovering:boolean,text:string,title:string}) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
   
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
  className={`fixed top-0 left-0 z-[9999] pointer-events-none
              
              transition-all duration-300 ease-out
              ${isHovering 
                ? "   scale-110" 
                : "w-6 h-6 border-2 border-yellow-400 rounded-full scale-100"}`
  }
  style={{
    transform: `translate(${pos.x - (isHovering ? 56 : 12)}px, ${pos.y - (isHovering ? 56 : 12)}px)`
  }}
>
  {isHovering && (
<div className="" >
   <h2 className="font-semibold  pr-5 text-3xl bg-white pb-3s text-black/90   "> {title} </h2> 
    <p className="text-black/60 bg-white w-min text-sm pb-2 tracking-wider select-none pointer-events-none   ">
   {text}
    </p> 
    
    </div>
  )}
</div>

  )
}