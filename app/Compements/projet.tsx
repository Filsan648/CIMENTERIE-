import project1 from "app/asset/Project/project1.png"
import project2 from "app/asset/Project/project2.png"
import project3 from "app/asset/Project/project3.png"
import project4 from "app/asset/Project/project4.jpg"
import project5 from "app/asset/Project/project5.png"
import Title from "~/asset/asstes/title"
import Description from "~/asset/asstes/description"
import Cursor from "~/asset/asstes/cursor"
import { useState } from "react"
import fleche from "app/asset/icone/fleche-droite.png"
const projects = [
  {
    title: "Aloumbolto Bridge",
    description: "Bridge construction project",
    image: project4,
  },
  {
    title: "Nagad",
    description: "Nagad construction project",
    image: project2,
  },
   {
    title: "Real Estate",
    description: "Real estate development project",
    image: project5,
  },
  {
    title: "Lagar",
    description: "Social housing project",
    image: project3,
  },
  {
    title: "Social Housing",
    description: "Real estate development project",
    image: project1,
  },
]

function Projects() {
  const [index, setIndex] = useState(0)
  const [isHovering, setHovering] = useState(false)
  const [text, setText]=useState("")
  const visible = 3
  const maxIndex = projects.length - visible

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex))
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0))

  const translateX = `-${index * (100 / visible)}%`


  return (
    <div className="relative w-full h-screen overflow-hidden  pb-10 ">
  <div  className="px-5 pt-8">
    <Title title="OUR WORK" />
    <div className=" flex gap-24 ">
     <div>
    <Description description="Comprehensive solutions for heavy indistrials projects" /> </div>
    <div className=" flex justify-end gap-4">
      
     <img    onClick={prev} src={fleche} className="w-10 h-10 p-2 active:bg-gray-300 rotate-180 bg-gray-300/40 " />
      
     <img   onClick={next}  src={fleche} className="w-10 h-10 p-2 active:bg-gray-300 bg-gray-300/40 " />
      </div>
  </div>

    
      
</div>
      {/* SLIDER */}
      <div className="w-full  overflow-hidden relative ">
        <div
          className="flex gap-6  transition-transform duration-700"
          style={{ transform: `translateX(${translateX})` }}
        >
          {projects.map((item, i) => (
            <div key={i} className="w-1/3  flex-shrink-0 md:h-[400px] relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover  "
                onMouseEnter={() => {setHovering(true);setText(item.title)}}
                onMouseLeave={() => {setHovering(false);setText("")}}
              />
            </div>
          ))}
        </div>
      </div>

 
      <Cursor
        isHovering={isHovering}
        title={text}
        text="Project"
      />

      
    </div>
  )
}

export default Projects
