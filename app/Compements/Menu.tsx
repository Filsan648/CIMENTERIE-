import logos from "app/asset/Menue/logo.png"
import facebbok  from "app/asset/icone/facebook.png"
import x from "app/asset/icone/x.png"
import Button from "~/asset/asstes/Button"
function  Menue(){
return(
  <div className=" z-50  h-min fixed pr-3.5 top-0 text-black/80 w-screen items-center bg-white flex flex-row  justify-between p-4">
    <div>  <img src={logos} className="w-20" />  </div> 
  

    <div className="flex fex-row gap-8 ">  
         <nav className="hover:text-yellow-500  "> Home    </nav> 
           <nav className="hover:text-yellow-500"> About    </nav> 
             <nav className="hover:text-yellow-500"> Our product    </nav> 
             <nav className="hover:text-yellow-500"> Capabilities   </nav>
       </div> 



      <div>  <Button text='Get in touch' />  </div> 
  
  
  
  </div>  
)
}
export default Menue;
