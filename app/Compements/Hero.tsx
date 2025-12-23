import hero from "app/asset/Hero/hero1.png"
import hero2 from "app/asset/Hero/hero2.jpg"
import { useState, useEffect } from "react"
import Button from "~/asset/asstes/Button"

const Content = [
  {
    title: "We produce quality cement",
    content:
      "Cimenterie d’Ali-Sabieh (CIMAS) is a major industrial player based in Ali Sabieh, Djibouti. Since its establishment in 2013, the company has become one of the leading cement producers in the region.",
    image: hero,
  },
  {
    title: "Industrial performance & innovation",
    content:
      "CIMAS combines innovation, industrial performance, and a strong commitment to quality to serve the region with excellence.",
    image: hero2,
  },
]
function Hero() {
  const [index, setIndex] = useState(0)

  // AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Content.length)
    }, 1000*3)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen pt-20 relative overflow-hidden">
      <img
        src={Content[index].image}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center">
        <div className="text-white px-16 max-w-2xl">
          <h2 className="text-5xl font-bold mb-6">
            {Content[index].title}
          </h2>
          <p className="text-lg">
            {Content[index].content}
          </p>
<Button text="Discover More"/>
        </div>
      </div>

      {/* MINIATURES */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        {Content.map((item, i) => (
          <img
            key={i}
            src={item.image}
            onClick={() => setIndex(i)}
            className={`h-24 w-40 object-cover cursor-pointer transition-all duration-300
              ${index === i ? "ring-2 ring-zinc-50 scale-105" : "opacity-70 hover:opacity-100"}
            `}
          />
        ))}
      </div>
    </div>
  )
}
export default Hero;