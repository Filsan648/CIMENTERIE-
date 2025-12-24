import video from "app/asset/About/about.mp4"
import Button from "~/asset/asstes/Button"
import Title from "~/asset/asstes/title"
import Chosse from "~/asset/asstes/chosse"
import bage from "app/asset/icone/badge.png"
const about=[
    {
        title:"Our History",
        content:"Founded with the ambition to support national and regional infrastructure development, CIMAShas relied on both local and international expertise to build a modern plant, equipped with arigorous quality control system and proven technologies. "

    },

    {
         title:"Our Mission",
         content:"To deliver high-quality cement while actively contributing to the sustainable development of Djibouti and the Horn of Africa."
    },
     {
         title:"Our Vision",
         content:"To become a regional leader in reliable, innovative, and environmentally responsible cement production, while creating long-term value for our customers, partners, and communities."
    }
]


function About (){
return(
    <div className=" pl-5 pr-5 flex  flex-row">
  <div className="w-1/2"> 
      <Title title="ABOUT US"/>
    <h1 className="text-6xl text-black/90 text-wrap font-semibold"> 
    We are established in  <span className="text-yellow-500" >2013 </span> Cimenterie d'Ali-Sabieh produces high quality cement</h1>
  <p className="text-black/60 mt-3 mb-3 ">
 Cimenterie d’Ali-Sabieh (CIMAS) is a major industrial player based in Ali Sabieh, Djibouti.
Since its establishment in 2013, the company has become one of the leading cement producers in
the region, combining innovation, industrial performance, and a strong commitment to quality.
  </p>
 <Chosse chosse={about}/>
 <div className="text-black/60 flex justify-start text-sm gap-5 pb-3">
     <div className="flex justify-center gap-3 items-center"><img src={bage} className=" " />  <p>Quality control system  </p> </div>
 <div className="flex justify-center gap-3 items-center"><img src={bage} className=" " />  <p>Building quality indistrial </p> </div>

 </div>



    <Button text="Explore More"/>
 </div>

  <div className="w-1/2 ">
    <video className="w-full mt-10" src={video} autoPlay loop muted controls />
  </div>

 
    </div>
)
}
export default About