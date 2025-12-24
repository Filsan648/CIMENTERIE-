import exp from "app/asset/icone/employe-homme-alt.png"
import projet from "app/asset/icone/demi-ampoule-cerebrale.png"
import machine from "app/asset/icone/bras-robotique.png"
import Title from "~/asset/asstes/title"
import Description from "~/asset/asstes/description"
import fleche from "app/asset/icone/fleche-droite.png"
const containt=[
    {
        icone:exp,
        title:"Expérience"
        ,description:"First and foremost, we are builders. The combined expertise of our team has enabled us to deliver high-quality cement and successfully contribute to major infrastructure projects acrossthe country."

    },
    {
        icone:projet,
        title:"Project Expertise"
        ,description:"With extensive experience in residential, commercial, and infrastructure works, our team ensuresthat your construction goals are achieved efficiently, on time, and to the highest standards."

    },
     {
        icone:machine,
        title:"Advanced Machinery"
        ,description:"We operate with state-of-the-art equipment and industrial processes to ensure optimal quality in every batch of cement — tailored to the technical specifications of each project."

    }
]
function Chosse(){
return(
<div className="px-5 pt-8 pb-10 bg-amber-50">
  {/* Titre section */}
  <div className="mb-10">
    <Title title="PRODUCTS AND  SERVICES" />
    <Description description="We supply premium cement nationwide" />
  </div>

  {/* Liste */}
  <div className="flex flex-col gap-8">
    {containt.map((item, index) => (
      <div
        key={index}
        className="
          group flex items-center justify-between gap-8
          p-6  
          transition-all duration-500 border-b-2 border-black/15
         
        "
      >
        {/* Icône */}
        <div className="w-14 h-14 flex-shrink-0">
          <img
            src={item.icone}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Texte */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-black/80 mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-black/60 max-w-xl">
            {item.description}
          </p>
        </div>

        {/* Action */}
        <div
          className="
            bg-white rounded-full p-4
            shadow-xl
            transition-all duration-500 ease-out
            group-hover:bg-yellow-200
            group-hover:shadow-none
            group-hover:scale-95
          "
        >
          <img
            src={fleche}
            alt="read more"
            className="
              w-5 h-5
              transition-opacity duration-500
              group-hover:opacity-90
            "
          />
        </div>
      </div>
    ))}
  </div>
</div>

)
}
export default Chosse