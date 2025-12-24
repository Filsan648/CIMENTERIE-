import Title from "~/asset/asstes/title"
import Description from "~/asset/asstes/description"
import Cec from "app/asset/Client/cec.png"
import hawk from "app/asset/Client/hawk.png"
import { useState, useEffect, useRef } from "react"

const client = [
  { 
    name:"CEC",
    fonction:"construction company",
    comment:"Le ciment arrey est reconnu pour sa résistance et sa durabilité, ce qui en fait un matériau idéal pour tous nos constructions.",
    img:Cec  
  },
  { 
    name:"Hight mouve",
    fonction:"construction company",
    comment:"En terme de qualité le ciment arrey peut être utilisé dans une variété de projets, y compris la création de dallages, de parpaings et de ligne de trottoir",
    img:null  // placeholder
  },
  { 
    name:"Hawk international",
    fonction:"construction company",
    comment:"La Cimenterie D'Ali-Sabieh est appréciés pour leur rapidité d'exécution, ce qui nous est utile dans certains contextes.",
    img:hawk
  }
]

function Client(){
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)
  const sliderRef = useRef(null)

  const PER_PAGE = width < 768 ? 1 : 2 // responsive

  const next = () => {
    setIndex((prev) => (prev + PER_PAGE) % client.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - PER_PAGE + client.length) % client.length)
  }

  useEffect(() => {
    const interval = setInterval(next, 3000)
    return () => clearInterval(interval)
  }, [width])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return(
    <div className="flex flex-row gap-6 bg-amber-50 px-5 pt-8 pb-10 ">

      <div>
        <Title title="CLIENTS" />
        <Description description="Our clients are satisfied with our work" />
        
        <div className="flex  gap-4  ">
          <button onClick={prev} className="px-4 py-2 text-2xl rounded bg-black/10 hover:bg-black/20 border border-black/30 ">←</button>
          <button onClick={next} className="px-4 py-2 text-2xl rounded bg-black/10 hover:bg-black/20 border border-black/30 ">→</button>
        </div>
      </div>

      <div className="w-full">
        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-10 transition-transform duration-500"
            style={{ transform: `translateX(-${(100 / PER_PAGE) * index}%)` }}
          >
            {client.map((item) => (
              <div
                key={item.name}
                className="flex-shrink-0 w-full md:w-1/2  p-5 rounded-xl shadow"
              >
                {/* === STRUCTURE INCHANGÉE === */}
                <div className="flex flex-row justify-items-center gap-4">
                  {item.img && <div><img src={item.img} alt={item.name} className="w-9" /></div>}

                  <div>
                    <h2 className="text-xl text-black/90 font-semibold">{item.name}</h2>
                    <p className="text-black/85">{item.fonction}</p>
                  </div>
                </div>

                <p className="text-black/60 pt-4">{item.comment}</p>
                {/* ========================== */}
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default Client
