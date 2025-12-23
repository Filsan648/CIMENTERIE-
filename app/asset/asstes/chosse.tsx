import { useState } from "react"

interface AboutItem {
  title: string
  content: string
}

interface ChosseProps {
  chosse: AboutItem[]
}

function Chosse({ chosse }: ChosseProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col w-full p-3 ">
      {/* TITLES ROW */}
      <div className="flex flex-row gap-4 bg-gray-200 flex-wrap">
        {chosse.map((item, index) => (
          <h2
            key={index}
            onClick={() => toggle(index)}
            className={`cursor-pointer select-none px-6 py-3 rounded transition 
                        ${activeIndex === index ? " border-t-2 border-yellow-400 text-yellow-400" : " "}`}
          >
            {item.title}
          </h2>
        ))}
      </div>

      {/* CONTENT */}
      {activeIndex !== null && (
        <div className="mt-4 w-full max-w-4xl mx-auto ">
          <p className= " text-black/60 transition-all">
            {chosse[activeIndex].content}
          </p>
        </div>
      )}
    </div>
  )
}

export default Chosse
