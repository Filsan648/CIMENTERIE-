import Title from "~/asset/asstes/title"
import Description from "~/asset/asstes/description"
import cement from "app/asset/Product/cement.jpg"
import delivery from "app/asset/Product/main.png"
import icone from "app/asset/icone/angle-double-droit.png"
const Containt=[
    {
        title:"Experience",
        description:"Proven Track Record in Construction",
        content:"Proven Track Record in Construction We have extensive experience supplying cement for both residential and commercial projects — contributing to the successful completion of over 500 custom homes and more than 100 commercial developments."
        ,image:delivery
   
    },
     {
        title:"Main Product",
        description:"High-Quality Portland Cement",
        content:"Cimenterie d’Ali-Sabieh specializes in producing premium Portland cement, known for its strength, durability, and consistency — ideal for all types of infrastructure and construction needs."
        ,image:delivery
    
    },
     {
        title:"Cement Delivery",
        description:"Reliable Logistics, On-Time Delivery",
        content:"Our logistics service guarantees timely and secure delivery of cement across the country,ensuring the durability and progress of your construction projects without interruption."
        ,image: cement
    
    },
        
]

function Product(){
    return(<div className="pl-5 pr-5 ">
<Title title="Products and Services" />
<Description description="We supply premium cement nationwide" />
    <div className="flex flex-row gap-5 justify-between  ">
        {Containt.map((item,index)=>
        <div  key={index} className="w-min" >
        <div className="w-80 h-48 flex flex-col " >
          <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>

        </div>
<div>
 <h2 className="text-2xl pt-7 font-semibold text-black/80">{item.title}</h2>   
<p className="text-black/60 text-xs">{item.description}</p>
</div>
<p className="text-black text-sm pt-10">{item.content}</p>
<div className="pt-5">
  <a
    href="#"
    className="
      group inline-flex items-center gap-3
      text-black/60 hover:text-black
      transition-all duration-500 ease-out
    "
  >
    {/* Texte */}
    <span className="relative text-sm tracking-wide">
      Read more
      <span
        className="
          absolute left-0 -bottom-1 h-[1px] w-0
          bg-black
          transition-all duration-500
          group-hover:w-full
        "
      />
    </span>

    {/* Icône */}
    <span
      className="
        flex items-center justify-center
        transition-all duration-500 ease-out
        group-hover:translate-x-3
      "
    >
      <img
        src={icone}
        alt=""
        className="w-4 h-4 opacity-70 group-hover:opacity-100"
      />
    </span>
  </a>
</div>

        </div>
        )} 
    </div>
</div>
    )
}
export default Product